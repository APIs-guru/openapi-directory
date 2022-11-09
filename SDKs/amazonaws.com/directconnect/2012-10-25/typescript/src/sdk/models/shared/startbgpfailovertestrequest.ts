import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartBgpFailoverTestRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bgpPeers" })
  bgpPeers?: string[];

  @Metadata({ data: "json, name=testDurationInMinutes" })
  testDurationInMinutes?: number;

  @Metadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId: string;
}

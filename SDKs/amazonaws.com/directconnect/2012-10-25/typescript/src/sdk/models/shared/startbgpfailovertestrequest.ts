import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartBgpFailoverTestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bgpPeers" })
  bgpPeers?: string[];

  @SpeakeasyMetadata({ data: "json, name=testDurationInMinutes" })
  testDurationInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId: string;
}

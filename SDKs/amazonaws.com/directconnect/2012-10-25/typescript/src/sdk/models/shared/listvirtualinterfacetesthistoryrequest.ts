import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListVirtualInterfaceTestHistoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bgpPeers" })
  bgpPeers?: string[];

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=testId" })
  testId?: string;

  @Metadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId?: string;
}

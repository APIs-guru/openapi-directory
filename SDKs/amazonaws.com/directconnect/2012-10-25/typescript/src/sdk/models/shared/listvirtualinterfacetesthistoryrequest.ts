import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListVirtualInterfaceTestHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bgpPeers" })
  bgpPeers?: string[];

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=testId" })
  testId?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualInterfaceId" })
  virtualInterfaceId?: string;
}

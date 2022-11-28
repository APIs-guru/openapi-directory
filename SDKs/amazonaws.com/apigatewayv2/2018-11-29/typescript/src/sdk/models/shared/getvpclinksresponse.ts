import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcLink } from "./vpclink";



export class GetVpcLinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: VpcLink })
  items?: VpcLink[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VpcLink } from "./vpclink";


export class GetVpcLinksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.VpcLink })
  items?: VpcLink[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

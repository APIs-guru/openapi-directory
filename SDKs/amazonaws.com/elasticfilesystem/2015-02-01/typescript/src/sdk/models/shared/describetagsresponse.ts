import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// DescribeTagsResponse
/** 
 * <p/>
**/
export class DescribeTagsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags: Tag[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListTagsForVaultOutput
/** 
 * Contains the Amazon S3 Glacier response to your request.
**/
export class ListTagsForVaultOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}

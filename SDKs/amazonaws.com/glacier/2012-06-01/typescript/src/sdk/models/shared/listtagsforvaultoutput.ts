import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListTagsForVaultOutput
/** 
 * Contains the Amazon S3 Glacier response to your request.
**/
export class ListTagsForVaultOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}

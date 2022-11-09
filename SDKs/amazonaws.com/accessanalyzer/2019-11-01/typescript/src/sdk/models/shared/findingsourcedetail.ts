import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FindingSourceDetail
/** 
 * Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings.
**/
export class FindingSourceDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessPointArn" })
  accessPointArn?: string;
}

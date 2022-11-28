import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FindingSourceDetail
/** 
 * Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings.
**/
export class FindingSourceDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessPointArn" })
  accessPointArn?: string;
}

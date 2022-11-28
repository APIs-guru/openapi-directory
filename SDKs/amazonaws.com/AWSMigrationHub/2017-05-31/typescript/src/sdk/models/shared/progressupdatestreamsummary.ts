import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProgressUpdateStreamSummary
/** 
 * Summary of the AWS resource used for access control that is implicitly linked to your AWS account.
**/
export class ProgressUpdateStreamSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProgressUpdateStreamName" })
  progressUpdateStreamName?: string;
}

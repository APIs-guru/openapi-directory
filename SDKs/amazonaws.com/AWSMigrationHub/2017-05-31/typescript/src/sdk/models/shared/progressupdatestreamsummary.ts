import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProgressUpdateStreamSummary
/** 
 * Summary of the AWS resource used for access control that is implicitly linked to your AWS account.
**/
export class ProgressUpdateStreamSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProgressUpdateStreamName" })
  progressUpdateStreamName?: string;
}

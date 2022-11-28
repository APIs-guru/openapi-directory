import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeUserImportJobRequest
/** 
 * Represents the request to describe the user import job.
**/
export class DescribeUserImportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeUserImportJobRequest
/** 
 * Represents the request to describe the user import job.
**/
export class DescribeUserImportJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId: string;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsService
/** 
 *  An Amazon Web Service such as Amazon S3, CloudTrail, and so on. 
**/
export class AwsService extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}

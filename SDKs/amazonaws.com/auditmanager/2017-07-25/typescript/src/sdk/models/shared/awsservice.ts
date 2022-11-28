import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsService
/** 
 *  An Amazon Web Service such as Amazon S3, CloudTrail, and so on. 
**/
export class AwsService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;
}

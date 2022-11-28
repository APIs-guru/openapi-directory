import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceQuota
/** 
 * The AWS Elastic Beanstalk quota information for a single resource type in an AWS account. It reflects the resource's limits for this account.
**/
export class ResourceQuota extends SpeakeasyBase {
  @SpeakeasyMetadata()
  maximum?: number;
}

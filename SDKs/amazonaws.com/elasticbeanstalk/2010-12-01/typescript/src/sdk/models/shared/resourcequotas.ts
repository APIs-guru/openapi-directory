import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceQuota } from "./resourcequota";



// ResourceQuotas
/** 
 * A set of per-resource AWS Elastic Beanstalk quotas associated with an AWS account. They reflect Elastic Beanstalk resource limits for this account.
**/
export class ResourceQuotas extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationQuota?: ResourceQuota;

  @SpeakeasyMetadata()
  applicationVersionQuota?: ResourceQuota;

  @SpeakeasyMetadata()
  configurationTemplateQuota?: ResourceQuota;

  @SpeakeasyMetadata()
  customPlatformQuota?: ResourceQuota;

  @SpeakeasyMetadata()
  environmentQuota?: ResourceQuota;
}

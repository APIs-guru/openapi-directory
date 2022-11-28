import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceQuota } from "./resourcequota";
/**
 * A set of per-resource AWS Elastic Beanstalk quotas associated with an AWS account. They reflect Elastic Beanstalk resource limits for this account.
**/
export declare class ResourceQuotas extends SpeakeasyBase {
    applicationQuota?: ResourceQuota;
    applicationVersionQuota?: ResourceQuota;
    configurationTemplateQuota?: ResourceQuota;
    customPlatformQuota?: ResourceQuota;
    environmentQuota?: ResourceQuota;
}

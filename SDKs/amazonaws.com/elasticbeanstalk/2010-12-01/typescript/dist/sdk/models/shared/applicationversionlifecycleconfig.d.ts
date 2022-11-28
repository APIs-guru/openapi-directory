import { SpeakeasyBase } from "../../../internal/utils";
import { MaxAgeRule } from "./maxagerule";
import { MaxCountRule } from "./maxcountrule";
/**
 * <p>The application version lifecycle settings for an application. Defines the rules that Elastic Beanstalk applies to an application's versions in order to avoid hitting the per-region limit for application versions.</p> <p>When Elastic Beanstalk deletes an application version from its database, you can no longer deploy that version to an environment. The source bundle remains in S3 unless you configure the rule to delete it.</p>
**/
export declare class ApplicationVersionLifecycleConfig extends SpeakeasyBase {
    maxAgeRule?: MaxAgeRule;
    maxCountRule?: MaxCountRule;
}

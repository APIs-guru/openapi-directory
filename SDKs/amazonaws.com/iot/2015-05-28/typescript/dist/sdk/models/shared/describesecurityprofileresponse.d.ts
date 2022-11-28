import { SpeakeasyBase } from "../../../internal/utils";
import { MetricToRetain } from "./metrictoretain";
import { AlertTarget } from "./alerttarget";
import { Behavior } from "./behavior";
export declare class DescribeSecurityProfileResponse extends SpeakeasyBase {
    additionalMetricsToRetain?: string[];
    additionalMetricsToRetainV2?: MetricToRetain[];
    alertTargets?: Map<string, AlertTarget>;
    behaviors?: Behavior[];
    creationDate?: Date;
    lastModifiedDate?: Date;
    securityProfileArn?: string;
    securityProfileDescription?: string;
    securityProfileName?: string;
    version?: number;
}

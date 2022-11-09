import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateUsagePlanHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Quotas configured for a usage plan.
**/
export declare class CreateUsagePlanRequestBodyQuota extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    period?: shared.QuotaPeriodTypeEnum;
}
/**
 *  The API request rate limits.
**/
export declare class CreateUsagePlanRequestBodyThrottle extends SpeakeasyBase {
    burstLimit?: number;
    rateLimit?: number;
}
export declare class CreateUsagePlanRequestBody extends SpeakeasyBase {
    apiStages?: shared.ApiStage[];
    description?: string;
    name: string;
    quota?: CreateUsagePlanRequestBodyQuota;
    tags?: Map<string, string>;
    throttle?: CreateUsagePlanRequestBodyThrottle;
}
export declare class CreateUsagePlanRequest extends SpeakeasyBase {
    headers: CreateUsagePlanHeaders;
    request: CreateUsagePlanRequestBody;
}
export declare class CreateUsagePlanResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
    usagePlan?: shared.UsagePlan;
}

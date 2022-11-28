import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsagePlanPathParams extends SpeakeasyBase {
    usageplanId: string;
}
export declare class GetUsagePlanHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUsagePlanRequest extends SpeakeasyBase {
    pathParams: GetUsagePlanPathParams;
    headers: GetUsagePlanHeaders;
}
export declare class GetUsagePlanResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
    usagePlan?: shared.UsagePlan;
}

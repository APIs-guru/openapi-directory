import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateUsagePlanPathParams extends SpeakeasyBase {
    usageplanId: string;
}
export declare class UpdateUsagePlanHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateUsagePlanRequestBody extends SpeakeasyBase {
    patchOperations?: shared.PatchOperation[];
}
export declare class UpdateUsagePlanRequest extends SpeakeasyBase {
    pathParams: UpdateUsagePlanPathParams;
    headers: UpdateUsagePlanHeaders;
    request: UpdateUsagePlanRequestBody;
}
export declare class UpdateUsagePlanResponse extends SpeakeasyBase {
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

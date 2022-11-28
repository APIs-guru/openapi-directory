import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteUsagePlanPathParams extends SpeakeasyBase {
    usageplanId: string;
}
export declare class DeleteUsagePlanHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteUsagePlanRequest extends SpeakeasyBase {
    pathParams: DeleteUsagePlanPathParams;
    headers: DeleteUsagePlanHeaders;
}
export declare class DeleteUsagePlanResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}

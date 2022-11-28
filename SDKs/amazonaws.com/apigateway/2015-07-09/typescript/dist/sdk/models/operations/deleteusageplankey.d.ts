import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteUsagePlanKeyPathParams extends SpeakeasyBase {
    keyId: string;
    usageplanId: string;
}
export declare class DeleteUsagePlanKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteUsagePlanKeyRequest extends SpeakeasyBase {
    pathParams: DeleteUsagePlanKeyPathParams;
    headers: DeleteUsagePlanKeyHeaders;
}
export declare class DeleteUsagePlanKeyResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}

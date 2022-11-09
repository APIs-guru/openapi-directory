import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateUsagePlanKeyPathParams extends SpeakeasyBase {
    usageplanId: string;
}
export declare class CreateUsagePlanKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateUsagePlanKeyRequestBody extends SpeakeasyBase {
    keyId: string;
    keyType: string;
}
export declare class CreateUsagePlanKeyRequest extends SpeakeasyBase {
    pathParams: CreateUsagePlanKeyPathParams;
    headers: CreateUsagePlanKeyHeaders;
    request: CreateUsagePlanKeyRequestBody;
}
export declare class CreateUsagePlanKeyResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
    usagePlanKey?: shared.UsagePlanKey;
}

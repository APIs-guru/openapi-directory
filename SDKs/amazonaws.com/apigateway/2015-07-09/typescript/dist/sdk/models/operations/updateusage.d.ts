import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUsagePathParams extends SpeakeasyBase {
    keyId: string;
    usageplanId: string;
}
export declare class UpdateUsageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateUsageRequestBody extends SpeakeasyBase {
    patchOperations?: shared.PatchOperation[];
}
export declare class UpdateUsageRequest extends SpeakeasyBase {
    pathParams: UpdateUsagePathParams;
    headers: UpdateUsageHeaders;
    request: UpdateUsageRequestBody;
}
export declare class UpdateUsageResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
    usage?: shared.Usage;
}

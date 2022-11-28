import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsagePlanKeyPathParams extends SpeakeasyBase {
    keyId: string;
    usageplanId: string;
}
export declare class GetUsagePlanKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUsagePlanKeyRequest extends SpeakeasyBase {
    pathParams: GetUsagePlanKeyPathParams;
    headers: GetUsagePlanKeyHeaders;
}
export declare class GetUsagePlanKeyResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
    usagePlanKey?: shared.UsagePlanKey;
}

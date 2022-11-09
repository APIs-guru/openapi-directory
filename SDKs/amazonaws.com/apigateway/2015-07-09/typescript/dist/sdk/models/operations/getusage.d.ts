import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetUsagePathParams extends SpeakeasyBase {
    usageplanId: string;
}
export declare class GetUsageQueryParams extends SpeakeasyBase {
    endDate: string;
    keyId?: string;
    limit?: number;
    position?: string;
    startDate: string;
}
export declare class GetUsageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUsageRequest extends SpeakeasyBase {
    pathParams: GetUsagePathParams;
    queryParams: GetUsageQueryParams;
    headers: GetUsageHeaders;
}
export declare class GetUsageResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
    usage?: shared.Usage;
}

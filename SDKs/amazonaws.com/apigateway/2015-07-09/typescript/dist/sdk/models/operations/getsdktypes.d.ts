import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSdkTypesQueryParams extends SpeakeasyBase {
    limit?: number;
    position?: string;
}
export declare class GetSdkTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSdkTypesRequest extends SpeakeasyBase {
    queryParams: GetSdkTypesQueryParams;
    headers: GetSdkTypesHeaders;
}
export declare class GetSdkTypesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    sdkTypes?: shared.SdkTypes;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetRestApisQueryParams extends SpeakeasyBase {
    limit?: number;
    position?: string;
}
export declare class GetRestApisHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRestApisRequest extends SpeakeasyBase {
    queryParams: GetRestApisQueryParams;
    headers: GetRestApisHeaders;
}
export declare class GetRestApisResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    restApis?: shared.RestApis;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}

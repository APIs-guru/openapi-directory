import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class GetApiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetApiRequest extends SpeakeasyBase {
    pathParams: GetApiPathParams;
    headers: GetApiHeaders;
}
export declare class GetApiResponse extends SpeakeasyBase {
    contentType: string;
    getApiResponse?: shared.GetApiResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}

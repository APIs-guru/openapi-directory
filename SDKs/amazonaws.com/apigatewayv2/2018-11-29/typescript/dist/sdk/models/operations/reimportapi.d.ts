import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReimportApiPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class ReimportApiQueryParams extends SpeakeasyBase {
    basepath?: string;
    failOnWarnings?: boolean;
}
export declare class ReimportApiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ReimportApiRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class ReimportApiRequest extends SpeakeasyBase {
    pathParams: ReimportApiPathParams;
    queryParams: ReimportApiQueryParams;
    headers: ReimportApiHeaders;
    request: ReimportApiRequestBody;
}
export declare class ReimportApiResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    reimportApiResponse?: shared.ReimportApiResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}

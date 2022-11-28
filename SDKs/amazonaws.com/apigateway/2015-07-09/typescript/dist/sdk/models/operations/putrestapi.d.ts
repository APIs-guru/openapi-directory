import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRestApiPathParams extends SpeakeasyBase {
    restapiId: string;
}
export declare enum PutRestApiModeEnum {
    Merge = "merge",
    Overwrite = "overwrite"
}
export declare class PutRestApiQueryParams extends SpeakeasyBase {
    failonwarnings?: boolean;
    mode?: PutRestApiModeEnum;
    parameters?: Map<string, string>;
}
export declare class PutRestApiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutRestApiRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class PutRestApiRequest extends SpeakeasyBase {
    pathParams: PutRestApiPathParams;
    queryParams: PutRestApiQueryParams;
    headers: PutRestApiHeaders;
    request: PutRestApiRequestBody;
}
export declare class PutRestApiResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    restApi?: shared.RestApi;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}

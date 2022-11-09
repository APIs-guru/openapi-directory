import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ImportRestApiModeEnum {
    Import = "import"
}
export declare class ImportRestApiQueryParams extends SpeakeasyBase {
    failonwarnings?: boolean;
    mode: ImportRestApiModeEnum;
    parameters?: Map<string, string>;
}
export declare class ImportRestApiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ImportRestApiRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class ImportRestApiRequest extends SpeakeasyBase {
    queryParams: ImportRestApiQueryParams;
    headers: ImportRestApiHeaders;
    request: ImportRestApiRequestBody;
}
export declare class ImportRestApiResponse extends SpeakeasyBase {
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

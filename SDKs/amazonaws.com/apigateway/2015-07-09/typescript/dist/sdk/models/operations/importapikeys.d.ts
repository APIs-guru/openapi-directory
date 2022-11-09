import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ImportApiKeysFormatEnum {
    Csv = "csv"
}
export declare enum ImportApiKeysModeEnum {
    Import = "import"
}
export declare class ImportApiKeysQueryParams extends SpeakeasyBase {
    failonwarnings?: boolean;
    format: ImportApiKeysFormatEnum;
    mode: ImportApiKeysModeEnum;
}
export declare class ImportApiKeysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ImportApiKeysRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class ImportApiKeysRequest extends SpeakeasyBase {
    queryParams: ImportApiKeysQueryParams;
    headers: ImportApiKeysHeaders;
    request: ImportApiKeysRequestBody;
}
export declare class ImportApiKeysResponse extends SpeakeasyBase {
    apiKeyIds?: shared.ApiKeyIds;
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}

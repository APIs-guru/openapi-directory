import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportApiQueryParams extends SpeakeasyBase {
    basepath?: string;
    failOnWarnings?: boolean;
}
export declare class ImportApiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ImportApiRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class ImportApiRequest extends SpeakeasyBase {
    queryParams: ImportApiQueryParams;
    headers: ImportApiHeaders;
    request: ImportApiRequestBody;
}
export declare class ImportApiResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    importApiResponse?: shared.ImportApiResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}

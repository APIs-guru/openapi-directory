import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportApiPathParams extends SpeakeasyBase {
    apiId: string;
    specification: string;
}
export declare class ExportApiQueryParams extends SpeakeasyBase {
    exportVersion?: string;
    includeExtensions?: boolean;
    outputType: string;
    stageName?: string;
}
export declare class ExportApiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ExportApiRequest extends SpeakeasyBase {
    pathParams: ExportApiPathParams;
    queryParams: ExportApiQueryParams;
    headers: ExportApiHeaders;
}
export declare class ExportApiResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    exportApiResponse?: shared.ExportApiResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}

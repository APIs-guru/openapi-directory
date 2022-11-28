import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetExportPathParams extends SpeakeasyBase {
    exportType: string;
    restapiId: string;
    stageName: string;
}
export declare class GetExportQueryParams extends SpeakeasyBase {
    parameters?: Map<string, string>;
}
export declare class GetExportHeaders extends SpeakeasyBase {
    accept?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetExportRequest extends SpeakeasyBase {
    pathParams: GetExportPathParams;
    queryParams: GetExportQueryParams;
    headers: GetExportHeaders;
}
export declare class GetExportResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    exportResponse?: shared.ExportResponse;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}

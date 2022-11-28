import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCatalogImportStatusXAmzTargetEnum {
    AwsGlueGetCatalogImportStatus = "AWSGlue.GetCatalogImportStatus"
}
export declare class GetCatalogImportStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCatalogImportStatusXAmzTargetEnum;
}
export declare class GetCatalogImportStatusRequest extends SpeakeasyBase {
    headers: GetCatalogImportStatusHeaders;
    request: shared.GetCatalogImportStatusRequest;
}
export declare class GetCatalogImportStatusResponse extends SpeakeasyBase {
    contentType: string;
    getCatalogImportStatusResponse?: shared.GetCatalogImportStatusResponse;
    internalServiceException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ImportCatalogToGlueXAmzTargetEnum {
    AwsGlueImportCatalogToGlue = "AWSGlue.ImportCatalogToGlue"
}
export declare class ImportCatalogToGlueHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportCatalogToGlueXAmzTargetEnum;
}
export declare class ImportCatalogToGlueRequest extends SpeakeasyBase {
    headers: ImportCatalogToGlueHeaders;
    request: shared.ImportCatalogToGlueRequest;
}
export declare class ImportCatalogToGlueResponse extends SpeakeasyBase {
    contentType: string;
    importCatalogToGlueResponse?: Map<string, any>;
    internalServiceException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}

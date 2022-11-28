import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutDataCatalogEncryptionSettingsXAmzTargetEnum {
    AwsGluePutDataCatalogEncryptionSettings = "AWSGlue.PutDataCatalogEncryptionSettings"
}
export declare class PutDataCatalogEncryptionSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutDataCatalogEncryptionSettingsXAmzTargetEnum;
}
export declare class PutDataCatalogEncryptionSettingsRequest extends SpeakeasyBase {
    headers: PutDataCatalogEncryptionSettingsHeaders;
    request: shared.PutDataCatalogEncryptionSettingsRequest;
}
export declare class PutDataCatalogEncryptionSettingsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    putDataCatalogEncryptionSettingsResponse?: Map<string, any>;
    statusCode: number;
}

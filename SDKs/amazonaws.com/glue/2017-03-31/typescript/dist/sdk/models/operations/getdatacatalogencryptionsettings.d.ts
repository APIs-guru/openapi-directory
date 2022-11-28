import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDataCatalogEncryptionSettingsXAmzTargetEnum {
    AwsGlueGetDataCatalogEncryptionSettings = "AWSGlue.GetDataCatalogEncryptionSettings"
}
export declare class GetDataCatalogEncryptionSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDataCatalogEncryptionSettingsXAmzTargetEnum;
}
export declare class GetDataCatalogEncryptionSettingsRequest extends SpeakeasyBase {
    headers: GetDataCatalogEncryptionSettingsHeaders;
    request: shared.GetDataCatalogEncryptionSettingsRequest;
}
export declare class GetDataCatalogEncryptionSettingsResponse extends SpeakeasyBase {
    contentType: string;
    getDataCatalogEncryptionSettingsResponse?: shared.GetDataCatalogEncryptionSettingsResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}

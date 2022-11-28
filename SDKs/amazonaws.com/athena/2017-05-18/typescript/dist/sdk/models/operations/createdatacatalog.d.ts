import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDataCatalogXAmzTargetEnum {
    AmazonAthenaCreateDataCatalog = "AmazonAthena.CreateDataCatalog"
}
export declare class CreateDataCatalogHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDataCatalogXAmzTargetEnum;
}
export declare class CreateDataCatalogRequest extends SpeakeasyBase {
    headers: CreateDataCatalogHeaders;
    request: shared.CreateDataCatalogInput;
}
export declare class CreateDataCatalogResponse extends SpeakeasyBase {
    contentType: string;
    createDataCatalogOutput?: Map<string, any>;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}

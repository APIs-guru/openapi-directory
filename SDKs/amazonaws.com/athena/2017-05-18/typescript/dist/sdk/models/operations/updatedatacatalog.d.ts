import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDataCatalogXAmzTargetEnum {
    AmazonAthenaUpdateDataCatalog = "AmazonAthena.UpdateDataCatalog"
}
export declare class UpdateDataCatalogHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDataCatalogXAmzTargetEnum;
}
export declare class UpdateDataCatalogRequest extends SpeakeasyBase {
    headers: UpdateDataCatalogHeaders;
    request: shared.UpdateDataCatalogInput;
}
export declare class UpdateDataCatalogResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
    updateDataCatalogOutput?: Map<string, any>;
}

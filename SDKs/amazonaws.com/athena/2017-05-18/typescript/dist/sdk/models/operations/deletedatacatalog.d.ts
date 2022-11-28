import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDataCatalogXAmzTargetEnum {
    AmazonAthenaDeleteDataCatalog = "AmazonAthena.DeleteDataCatalog"
}
export declare class DeleteDataCatalogHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDataCatalogXAmzTargetEnum;
}
export declare class DeleteDataCatalogRequest extends SpeakeasyBase {
    headers: DeleteDataCatalogHeaders;
    request: shared.DeleteDataCatalogInput;
}
export declare class DeleteDataCatalogResponse extends SpeakeasyBase {
    contentType: string;
    deleteDataCatalogOutput?: Map<string, any>;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}

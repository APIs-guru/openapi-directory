import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDataCatalogXAmzTargetEnum {
    AmazonAthenaGetDataCatalog = "AmazonAthena.GetDataCatalog"
}
export declare class GetDataCatalogHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDataCatalogXAmzTargetEnum;
}
export declare class GetDataCatalogRequest extends SpeakeasyBase {
    headers: GetDataCatalogHeaders;
    request: shared.GetDataCatalogInput;
}
export declare class GetDataCatalogResponse extends SpeakeasyBase {
    contentType: string;
    getDataCatalogOutput?: shared.GetDataCatalogOutput;
    internalServerException?: any;
    invalidRequestException?: any;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutRepositoryCatalogDataXAmzTargetEnum {
    SpencerFrontendServicePutRepositoryCatalogData = "SpencerFrontendService.PutRepositoryCatalogData"
}
export declare class PutRepositoryCatalogDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRepositoryCatalogDataXAmzTargetEnum;
}
export declare class PutRepositoryCatalogDataRequest extends SpeakeasyBase {
    headers: PutRepositoryCatalogDataHeaders;
    request: shared.PutRepositoryCatalogDataRequest;
}
export declare class PutRepositoryCatalogDataResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    putRepositoryCatalogDataResponse?: shared.PutRepositoryCatalogDataResponse;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}

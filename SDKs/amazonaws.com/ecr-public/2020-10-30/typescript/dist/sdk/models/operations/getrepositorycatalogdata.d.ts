import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetRepositoryCatalogDataXAmzTargetEnum {
    SpencerFrontendServiceGetRepositoryCatalogData = "SpencerFrontendService.GetRepositoryCatalogData"
}
export declare class GetRepositoryCatalogDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRepositoryCatalogDataXAmzTargetEnum;
}
export declare class GetRepositoryCatalogDataRequest extends SpeakeasyBase {
    headers: GetRepositoryCatalogDataHeaders;
    request: shared.GetRepositoryCatalogDataRequest;
}
export declare class GetRepositoryCatalogDataResponse extends SpeakeasyBase {
    contentType: string;
    getRepositoryCatalogDataResponse?: shared.GetRepositoryCatalogDataResponse;
    invalidParameterException?: any;
    repositoryNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}

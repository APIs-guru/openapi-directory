import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetRegistryCatalogDataXAmzTargetEnum {
    SpencerFrontendServiceGetRegistryCatalogData = "SpencerFrontendService.GetRegistryCatalogData"
}
export declare class GetRegistryCatalogDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRegistryCatalogDataXAmzTargetEnum;
}
export declare class GetRegistryCatalogDataRequest extends SpeakeasyBase {
    headers: GetRegistryCatalogDataHeaders;
    request: Map<string, any>;
}
export declare class GetRegistryCatalogDataResponse extends SpeakeasyBase {
    contentType: string;
    getRegistryCatalogDataResponse?: shared.GetRegistryCatalogDataResponse;
    serverException?: any;
    statusCode: number;
    unsupportedCommandException?: any;
}

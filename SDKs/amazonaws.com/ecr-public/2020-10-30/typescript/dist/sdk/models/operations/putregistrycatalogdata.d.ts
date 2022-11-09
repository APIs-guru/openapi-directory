import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PutRegistryCatalogDataXAmzTargetEnum {
    SpencerFrontendServicePutRegistryCatalogData = "SpencerFrontendService.PutRegistryCatalogData"
}
export declare class PutRegistryCatalogDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRegistryCatalogDataXAmzTargetEnum;
}
export declare class PutRegistryCatalogDataRequest extends SpeakeasyBase {
    headers: PutRegistryCatalogDataHeaders;
    request: shared.PutRegistryCatalogDataRequest;
}
export declare class PutRegistryCatalogDataResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    putRegistryCatalogDataResponse?: shared.PutRegistryCatalogDataResponse;
    serverException?: any;
    statusCode: number;
    unsupportedCommandException?: any;
}

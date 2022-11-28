import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTestGridSessionArtifactsQueryParams extends SpeakeasyBase {
    maxResult?: string;
    nextToken?: string;
}
export declare enum ListTestGridSessionArtifactsXAmzTargetEnum {
    DeviceFarm20150623ListTestGridSessionArtifacts = "DeviceFarm_20150623.ListTestGridSessionArtifacts"
}
export declare class ListTestGridSessionArtifactsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTestGridSessionArtifactsXAmzTargetEnum;
}
export declare class ListTestGridSessionArtifactsRequest extends SpeakeasyBase {
    queryParams: ListTestGridSessionArtifactsQueryParams;
    headers: ListTestGridSessionArtifactsHeaders;
    request: shared.ListTestGridSessionArtifactsRequest;
}
export declare class ListTestGridSessionArtifactsResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    internalServiceException?: any;
    listTestGridSessionArtifactsResult?: shared.ListTestGridSessionArtifactsResult;
    notFoundException?: any;
    statusCode: number;
}

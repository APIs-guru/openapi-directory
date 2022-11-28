import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListArtifactsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListArtifactsXAmzTargetEnum {
    DeviceFarm20150623ListArtifacts = "DeviceFarm_20150623.ListArtifacts"
}
export declare class ListArtifactsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListArtifactsXAmzTargetEnum;
}
export declare class ListArtifactsRequest extends SpeakeasyBase {
    queryParams: ListArtifactsQueryParams;
    headers: ListArtifactsHeaders;
    request: shared.ListArtifactsRequest;
}
export declare class ListArtifactsResponse extends SpeakeasyBase {
    argumentException?: any;
    contentType: string;
    limitExceededException?: any;
    listArtifactsResult?: shared.ListArtifactsResult;
    notFoundException?: any;
    serviceAccountException?: any;
    statusCode: number;
}

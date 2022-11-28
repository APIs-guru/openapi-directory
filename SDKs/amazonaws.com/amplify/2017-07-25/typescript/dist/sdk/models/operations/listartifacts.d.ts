import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListArtifactsPathParams extends SpeakeasyBase {
    appId: string;
    branchName: string;
    jobId: string;
}
export declare class ListArtifactsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListArtifactsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListArtifactsRequest extends SpeakeasyBase {
    pathParams: ListArtifactsPathParams;
    queryParams: ListArtifactsQueryParams;
    headers: ListArtifactsHeaders;
}
export declare class ListArtifactsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    listArtifactsResult?: shared.ListArtifactsResult;
    statusCode: number;
    unauthorizedException?: any;
}

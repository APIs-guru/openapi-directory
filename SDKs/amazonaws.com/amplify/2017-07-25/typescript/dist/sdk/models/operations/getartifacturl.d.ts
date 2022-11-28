import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetArtifactUrlPathParams extends SpeakeasyBase {
    artifactId: string;
}
export declare class GetArtifactUrlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetArtifactUrlRequest extends SpeakeasyBase {
    pathParams: GetArtifactUrlPathParams;
    headers: GetArtifactUrlHeaders;
}
export declare class GetArtifactUrlResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getArtifactUrlResult?: shared.GetArtifactUrlResult;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}

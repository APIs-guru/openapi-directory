import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetComponentVersionArtifactPathParams extends SpeakeasyBase {
    arn: string;
    artifactName: string;
}
export declare class GetComponentVersionArtifactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetComponentVersionArtifactRequest extends SpeakeasyBase {
    pathParams: GetComponentVersionArtifactPathParams;
    headers: GetComponentVersionArtifactHeaders;
}
export declare class GetComponentVersionArtifactResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getComponentVersionArtifactResponse?: shared.GetComponentVersionArtifactResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}

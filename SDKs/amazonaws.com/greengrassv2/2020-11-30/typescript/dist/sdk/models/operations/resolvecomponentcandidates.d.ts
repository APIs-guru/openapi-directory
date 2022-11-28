import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResolveComponentCandidatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Contains information about a platform that a component supports.
**/
export declare class ResolveComponentCandidatesRequestBodyPlatform extends SpeakeasyBase {
    attributes?: Map<string, string>;
    name?: string;
}
export declare class ResolveComponentCandidatesRequestBody extends SpeakeasyBase {
    componentCandidates: shared.ComponentCandidate[];
    platform: ResolveComponentCandidatesRequestBodyPlatform;
}
export declare class ResolveComponentCandidatesRequest extends SpeakeasyBase {
    headers: ResolveComponentCandidatesHeaders;
    request: ResolveComponentCandidatesRequestBody;
}
export declare class ResolveComponentCandidatesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resolveComponentCandidatesResponse?: shared.ResolveComponentCandidatesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}

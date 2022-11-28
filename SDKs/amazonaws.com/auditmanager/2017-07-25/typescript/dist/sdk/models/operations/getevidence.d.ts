import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEvidencePathParams extends SpeakeasyBase {
    assessmentId: string;
    controlSetId: string;
    evidenceFolderId: string;
    evidenceId: string;
}
export declare class GetEvidenceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEvidenceRequest extends SpeakeasyBase {
    pathParams: GetEvidencePathParams;
    headers: GetEvidenceHeaders;
}
export declare class GetEvidenceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getEvidenceResponse?: shared.GetEvidenceResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}

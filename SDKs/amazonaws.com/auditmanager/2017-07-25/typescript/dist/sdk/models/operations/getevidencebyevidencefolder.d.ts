import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEvidenceByEvidenceFolderPathParams extends SpeakeasyBase {
    assessmentId: string;
    controlSetId: string;
    evidenceFolderId: string;
}
export declare class GetEvidenceByEvidenceFolderQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class GetEvidenceByEvidenceFolderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEvidenceByEvidenceFolderRequest extends SpeakeasyBase {
    pathParams: GetEvidenceByEvidenceFolderPathParams;
    queryParams: GetEvidenceByEvidenceFolderQueryParams;
    headers: GetEvidenceByEvidenceFolderHeaders;
}
export declare class GetEvidenceByEvidenceFolderResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getEvidenceByEvidenceFolderResponse?: shared.GetEvidenceByEvidenceFolderResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}

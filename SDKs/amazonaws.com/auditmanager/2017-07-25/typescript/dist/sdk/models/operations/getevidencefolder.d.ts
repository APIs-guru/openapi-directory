import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEvidenceFolderPathParams extends SpeakeasyBase {
    assessmentId: string;
    controlSetId: string;
    evidenceFolderId: string;
}
export declare class GetEvidenceFolderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEvidenceFolderRequest extends SpeakeasyBase {
    pathParams: GetEvidenceFolderPathParams;
    headers: GetEvidenceFolderHeaders;
}
export declare class GetEvidenceFolderResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getEvidenceFolderResponse?: shared.GetEvidenceFolderResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}

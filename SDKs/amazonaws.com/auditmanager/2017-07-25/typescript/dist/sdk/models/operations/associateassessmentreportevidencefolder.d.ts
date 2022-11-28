import { SpeakeasyBase } from "../../../internal/utils";
export declare class AssociateAssessmentReportEvidenceFolderPathParams extends SpeakeasyBase {
    assessmentId: string;
}
export declare class AssociateAssessmentReportEvidenceFolderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateAssessmentReportEvidenceFolderRequestBody extends SpeakeasyBase {
    evidenceFolderId: string;
}
export declare class AssociateAssessmentReportEvidenceFolderRequest extends SpeakeasyBase {
    pathParams: AssociateAssessmentReportEvidenceFolderPathParams;
    headers: AssociateAssessmentReportEvidenceFolderHeaders;
    request: AssociateAssessmentReportEvidenceFolderRequestBody;
}
export declare class AssociateAssessmentReportEvidenceFolderResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    associateAssessmentReportEvidenceFolderResponse?: Map<string, any>;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}

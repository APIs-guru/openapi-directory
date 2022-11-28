import { SpeakeasyBase } from "../../../internal/utils";
export declare class DisassociateAssessmentReportEvidenceFolderPathParams extends SpeakeasyBase {
    assessmentId: string;
}
export declare class DisassociateAssessmentReportEvidenceFolderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateAssessmentReportEvidenceFolderRequestBody extends SpeakeasyBase {
    evidenceFolderId: string;
}
export declare class DisassociateAssessmentReportEvidenceFolderRequest extends SpeakeasyBase {
    pathParams: DisassociateAssessmentReportEvidenceFolderPathParams;
    headers: DisassociateAssessmentReportEvidenceFolderHeaders;
    request: DisassociateAssessmentReportEvidenceFolderRequestBody;
}
export declare class DisassociateAssessmentReportEvidenceFolderResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    disassociateAssessmentReportEvidenceFolderResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}

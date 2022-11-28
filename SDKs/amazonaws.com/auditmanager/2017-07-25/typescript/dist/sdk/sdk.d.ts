import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://auditmanager.{region}.amazonaws.com", "https://auditmanager.{region}.amazonaws.com", "http://auditmanager.{region}.amazonaws.com.cn", "https://auditmanager.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * associateAssessmentReportEvidenceFolder -  Associates an evidence folder to the specified assessment report in Audit Manager.
    **/
    associateAssessmentReportEvidenceFolder(req: operations.AssociateAssessmentReportEvidenceFolderRequest, config?: AxiosRequestConfig): Promise<operations.AssociateAssessmentReportEvidenceFolderResponse>;
    /**
     * batchAssociateAssessmentReportEvidence -  Associates a list of evidence to an assessment report in an Audit Manager assessment.
    **/
    batchAssociateAssessmentReportEvidence(req: operations.BatchAssociateAssessmentReportEvidenceRequest, config?: AxiosRequestConfig): Promise<operations.BatchAssociateAssessmentReportEvidenceResponse>;
    /**
     * batchCreateDelegationByAssessment -  Create a batch of delegations for a specified assessment in Audit Manager.
    **/
    batchCreateDelegationByAssessment(req: operations.BatchCreateDelegationByAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.BatchCreateDelegationByAssessmentResponse>;
    /**
     * batchDeleteDelegationByAssessment -  Deletes the delegations in the specified Audit Manager assessment.
    **/
    batchDeleteDelegationByAssessment(req: operations.BatchDeleteDelegationByAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.BatchDeleteDelegationByAssessmentResponse>;
    /**
     * batchDisassociateAssessmentReportEvidence -  Disassociates a list of evidence from the specified assessment report in Audit Manager.
    **/
    batchDisassociateAssessmentReportEvidence(req: operations.BatchDisassociateAssessmentReportEvidenceRequest, config?: AxiosRequestConfig): Promise<operations.BatchDisassociateAssessmentReportEvidenceResponse>;
    /**
     * batchImportEvidenceToAssessmentControl -  Uploads one or more pieces of evidence to the specified control in the assessment in Audit Manager.
    **/
    batchImportEvidenceToAssessmentControl(req: operations.BatchImportEvidenceToAssessmentControlRequest, config?: AxiosRequestConfig): Promise<operations.BatchImportEvidenceToAssessmentControlResponse>;
    /**
     * createAssessment -  Creates an assessment in Audit Manager.
    **/
    createAssessment(req: operations.CreateAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateAssessmentResponse>;
    /**
     * createAssessmentFramework -  Creates a custom framework in Audit Manager.
    **/
    createAssessmentFramework(req: operations.CreateAssessmentFrameworkRequest, config?: AxiosRequestConfig): Promise<operations.CreateAssessmentFrameworkResponse>;
    /**
     * createAssessmentReport -  Creates an assessment report for the specified assessment.
    **/
    createAssessmentReport(req: operations.CreateAssessmentReportRequest, config?: AxiosRequestConfig): Promise<operations.CreateAssessmentReportResponse>;
    /**
     * createControl -  Creates a new custom control in Audit Manager.
    **/
    createControl(req: operations.CreateControlRequest, config?: AxiosRequestConfig): Promise<operations.CreateControlResponse>;
    /**
     * deleteAssessment -  Deletes an assessment in Audit Manager.
    **/
    deleteAssessment(req: operations.DeleteAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAssessmentResponse>;
    /**
     * deleteAssessmentFramework -  Deletes a custom framework in Audit Manager.
    **/
    deleteAssessmentFramework(req: operations.DeleteAssessmentFrameworkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAssessmentFrameworkResponse>;
    /**
     * deleteAssessmentReport -  Deletes an assessment report from an assessment in Audit Manager.
    **/
    deleteAssessmentReport(req: operations.DeleteAssessmentReportRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAssessmentReportResponse>;
    /**
     * deleteControl -  Deletes a custom control in Audit Manager.
    **/
    deleteControl(req: operations.DeleteControlRequest, config?: AxiosRequestConfig): Promise<operations.DeleteControlResponse>;
    /**
     * deregisterAccount -  Deregisters an account in Audit Manager.
    **/
    deregisterAccount(req: operations.DeregisterAccountRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterAccountResponse>;
    /**
     * deregisterOrganizationAdminAccount - <p>Removes the specified member account as a delegated administrator for Audit Manager. </p> <important> <p>When you remove a delegated administrator from your Audit Manager settings, or when you deregister a delegated administrator from Organizations, you continue to have access to the evidence that you previously collected under that account. However, Audit Manager will stop collecting and attaching evidence to that delegated administrator account moving forward.</p> </important>
    **/
    deregisterOrganizationAdminAccount(req: operations.DeregisterOrganizationAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterOrganizationAdminAccountResponse>;
    /**
     * disassociateAssessmentReportEvidenceFolder -  Disassociates an evidence folder from the specified assessment report in Audit Manager.
    **/
    disassociateAssessmentReportEvidenceFolder(req: operations.DisassociateAssessmentReportEvidenceFolderRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateAssessmentReportEvidenceFolderResponse>;
    /**
     * getAccountStatus -  Returns the registration status of an account in Audit Manager.
    **/
    getAccountStatus(req: operations.GetAccountStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountStatusResponse>;
    /**
     * getAssessment -  Returns an assessment from Audit Manager.
    **/
    getAssessment(req: operations.GetAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.GetAssessmentResponse>;
    /**
     * getAssessmentFramework -  Returns a framework from Audit Manager.
    **/
    getAssessmentFramework(req: operations.GetAssessmentFrameworkRequest, config?: AxiosRequestConfig): Promise<operations.GetAssessmentFrameworkResponse>;
    /**
     * getAssessmentReportUrl -  Returns the URL of a specified assessment report in Audit Manager.
    **/
    getAssessmentReportUrl(req: operations.GetAssessmentReportUrlRequest, config?: AxiosRequestConfig): Promise<operations.GetAssessmentReportUrlResponse>;
    /**
     * getChangeLogs -  Returns a list of changelogs from Audit Manager.
    **/
    getChangeLogs(req: operations.GetChangeLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetChangeLogsResponse>;
    /**
     * getControl -  Returns a control from Audit Manager.
    **/
    getControl(req: operations.GetControlRequest, config?: AxiosRequestConfig): Promise<operations.GetControlResponse>;
    /**
     * getDelegations -  Returns a list of delegations from an audit owner to a delegate.
    **/
    getDelegations(req: operations.GetDelegationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDelegationsResponse>;
    /**
     * getEvidence -  Returns evidence from Audit Manager.
    **/
    getEvidence(req: operations.GetEvidenceRequest, config?: AxiosRequestConfig): Promise<operations.GetEvidenceResponse>;
    /**
     * getEvidenceByEvidenceFolder -  Returns all evidence from a specified evidence folder in Audit Manager.
    **/
    getEvidenceByEvidenceFolder(req: operations.GetEvidenceByEvidenceFolderRequest, config?: AxiosRequestConfig): Promise<operations.GetEvidenceByEvidenceFolderResponse>;
    /**
     * getEvidenceFolder -  Returns an evidence folder from the specified assessment in Audit Manager.
    **/
    getEvidenceFolder(req: operations.GetEvidenceFolderRequest, config?: AxiosRequestConfig): Promise<operations.GetEvidenceFolderResponse>;
    /**
     * getEvidenceFoldersByAssessment -  Returns the evidence folders from a specified assessment in Audit Manager.
    **/
    getEvidenceFoldersByAssessment(req: operations.GetEvidenceFoldersByAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.GetEvidenceFoldersByAssessmentResponse>;
    /**
     * getEvidenceFoldersByAssessmentControl -  Returns a list of evidence folders associated with a specified control of an assessment in Audit Manager.
    **/
    getEvidenceFoldersByAssessmentControl(req: operations.GetEvidenceFoldersByAssessmentControlRequest, config?: AxiosRequestConfig): Promise<operations.GetEvidenceFoldersByAssessmentControlResponse>;
    /**
     * getOrganizationAdminAccount -  Returns the name of the delegated Amazon Web Services administrator account for the organization.
    **/
    getOrganizationAdminAccount(req: operations.GetOrganizationAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdminAccountResponse>;
    /**
     * getServicesInScope -  Returns a list of the in-scope Amazon Web Services services for the specified assessment.
    **/
    getServicesInScope(req: operations.GetServicesInScopeRequest, config?: AxiosRequestConfig): Promise<operations.GetServicesInScopeResponse>;
    /**
     * getSettings -  Returns the settings for the specified account.
    **/
    getSettings(req: operations.GetSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingsResponse>;
    /**
     * listAssessmentFrameworks -  Returns a list of the frameworks available in the Audit Manager framework library.
    **/
    listAssessmentFrameworks(req: operations.ListAssessmentFrameworksRequest, config?: AxiosRequestConfig): Promise<operations.ListAssessmentFrameworksResponse>;
    /**
     * listAssessmentReports -  Returns a list of assessment reports created in Audit Manager.
    **/
    listAssessmentReports(req: operations.ListAssessmentReportsRequest, config?: AxiosRequestConfig): Promise<operations.ListAssessmentReportsResponse>;
    /**
     * listAssessments -  Returns a list of current and past assessments from Audit Manager.
    **/
    listAssessments(req: operations.ListAssessmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListAssessmentsResponse>;
    /**
     * listControls -  Returns a list of controls from Audit Manager.
    **/
    listControls(req: operations.ListControlsRequest, config?: AxiosRequestConfig): Promise<operations.ListControlsResponse>;
    /**
     * listKeywordsForDataSource -  Returns a list of keywords that pre-mapped to the specified control data source.
    **/
    listKeywordsForDataSource(req: operations.ListKeywordsForDataSourceRequest, config?: AxiosRequestConfig): Promise<operations.ListKeywordsForDataSourceResponse>;
    /**
     * listNotifications -  Returns a list of all Audit Manager notifications.
    **/
    listNotifications(req: operations.ListNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.ListNotificationsResponse>;
    /**
     * listTagsForResource -  Returns a list of tags for the specified resource in Audit Manager.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * registerAccount -  Enables Audit Manager for the specified account.
    **/
    registerAccount(req: operations.RegisterAccountRequest, config?: AxiosRequestConfig): Promise<operations.RegisterAccountResponse>;
    /**
     * registerOrganizationAdminAccount -  Enables an account within the organization as the delegated administrator for Audit Manager.
    **/
    registerOrganizationAdminAccount(req: operations.RegisterOrganizationAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.RegisterOrganizationAdminAccountResponse>;
    /**
     * tagResource -  Tags the specified resource in Audit Manager.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource -  Removes a tag from a resource in Audit Manager.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateAssessment -  Edits an Audit Manager assessment.
    **/
    updateAssessment(req: operations.UpdateAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAssessmentResponse>;
    /**
     * updateAssessmentControl -  Updates a control within an assessment in Audit Manager.
    **/
    updateAssessmentControl(req: operations.UpdateAssessmentControlRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAssessmentControlResponse>;
    /**
     * updateAssessmentControlSetStatus -  Updates the status of a control set in an Audit Manager assessment.
    **/
    updateAssessmentControlSetStatus(req: operations.UpdateAssessmentControlSetStatusRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAssessmentControlSetStatusResponse>;
    /**
     * updateAssessmentFramework -  Updates a custom framework in Audit Manager.
    **/
    updateAssessmentFramework(req: operations.UpdateAssessmentFrameworkRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAssessmentFrameworkResponse>;
    /**
     * updateAssessmentStatus -  Updates the status of an assessment in Audit Manager.
    **/
    updateAssessmentStatus(req: operations.UpdateAssessmentStatusRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAssessmentStatusResponse>;
    /**
     * updateControl -  Updates a custom control in Audit Manager.
    **/
    updateControl(req: operations.UpdateControlRequest, config?: AxiosRequestConfig): Promise<operations.UpdateControlResponse>;
    /**
     * updateSettings -  Updates Audit Manager settings for the current user account.
    **/
    updateSettings(req: operations.UpdateSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSettingsResponse>;
    /**
     * validateAssessmentReportIntegrity -  Validates the integrity of an assessment report in Audit Manager.
    **/
    validateAssessmentReportIntegrity(req: operations.ValidateAssessmentReportIntegrityRequest, config?: AxiosRequestConfig): Promise<operations.ValidateAssessmentReportIntegrityResponse>;
}
export {};

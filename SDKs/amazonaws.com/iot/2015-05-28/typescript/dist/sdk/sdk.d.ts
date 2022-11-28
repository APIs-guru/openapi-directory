import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://iot.{region}.amazonaws.com", "https://iot.{region}.amazonaws.com", "http://iot.{region}.amazonaws.com.cn", "https://iot.{region}.amazonaws.com.cn"];
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
     * acceptCertificateTransfer - <p>Accepts a pending certificate transfer. The default state of the certificate is INACTIVE.</p> <p>To check for pending certificate transfers, call <a>ListCertificates</a> to enumerate your certificates.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AcceptCertificateTransfer</a> action.</p>
    **/
    acceptCertificateTransfer(req: operations.AcceptCertificateTransferRequest, config?: AxiosRequestConfig): Promise<operations.AcceptCertificateTransferResponse>;
    /**
     * addThingToBillingGroup - <p>Adds a thing to a billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AddThingToBillingGroup</a> action.</p>
    **/
    addThingToBillingGroup(req: operations.AddThingToBillingGroupRequest, config?: AxiosRequestConfig): Promise<operations.AddThingToBillingGroupResponse>;
    /**
     * addThingToThingGroup - <p>Adds a thing to a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AddThingToThingGroup</a> action.</p>
    **/
    addThingToThingGroup(req: operations.AddThingToThingGroupRequest, config?: AxiosRequestConfig): Promise<operations.AddThingToThingGroupResponse>;
    /**
     * associateTargetsWithJob - <p>Associates a group with a continuous job. The following criteria must be met: </p> <ul> <li> <p>The job must have been created with the <code>targetSelection</code> field set to "CONTINUOUS".</p> </li> <li> <p>The job status must currently be "IN_PROGRESS".</p> </li> <li> <p>The total number of targets associated with a job must not exceed 100.</p> </li> </ul> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AssociateTargetsWithJob</a> action.</p>
    **/
    associateTargetsWithJob(req: operations.AssociateTargetsWithJobRequest, config?: AxiosRequestConfig): Promise<operations.AssociateTargetsWithJobResponse>;
    /**
     * attachPolicy - <p>Attaches the specified policy to the specified principal (certificate or other credential).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachPolicy</a> action.</p>
    **/
    attachPolicy(req: operations.AttachPolicyRequest, config?: AxiosRequestConfig): Promise<operations.AttachPolicyResponse>;
    /**
     * attachPrincipalPolicy - <p>Attaches the specified policy to the specified principal (certificate or other credential).</p> <p> <b>Note:</b> This action is deprecated. Please use <a>AttachPolicy</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachPrincipalPolicy</a> action.</p>
    **/
    attachPrincipalPolicy(req: operations.AttachPrincipalPolicyRequest, config?: AxiosRequestConfig): Promise<operations.AttachPrincipalPolicyResponse>;
    /**
     * attachSecurityProfile - <p>Associates a Device Defender security profile with a thing group or this account. Each thing group or account can have up to five security profiles associated with it.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachSecurityProfile</a> action.</p>
    **/
    attachSecurityProfile(req: operations.AttachSecurityProfileRequest, config?: AxiosRequestConfig): Promise<operations.AttachSecurityProfileResponse>;
    /**
     * attachThingPrincipal - <p>Attaches the specified principal to the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachThingPrincipal</a> action.</p>
    **/
    attachThingPrincipal(req: operations.AttachThingPrincipalRequest, config?: AxiosRequestConfig): Promise<operations.AttachThingPrincipalResponse>;
    /**
     * cancelAuditMitigationActionsTask - <p>Cancels a mitigation action task that is in progress. If the task is not in progress, an InvalidRequestException occurs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelAuditMitigationActionsTask</a> action.</p>
    **/
    cancelAuditMitigationActionsTask(req: operations.CancelAuditMitigationActionsTaskRequest, config?: AxiosRequestConfig): Promise<operations.CancelAuditMitigationActionsTaskResponse>;
    /**
     * cancelAuditTask - <p>Cancels an audit that is in progress. The audit can be either scheduled or on demand. If the audit isn't in progress, an "InvalidRequestException" occurs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelAuditTask</a> action.</p>
    **/
    cancelAuditTask(req: operations.CancelAuditTaskRequest, config?: AxiosRequestConfig): Promise<operations.CancelAuditTaskResponse>;
    /**
     * cancelCertificateTransfer - <p>Cancels a pending transfer for the specified certificate.</p> <p> <b>Note</b> Only the transfer source account can use this operation to cancel a transfer. (Transfer destinations can use <a>RejectCertificateTransfer</a> instead.) After transfer, IoT returns the certificate to the source account in the INACTIVE state. After the destination account has accepted the transfer, the transfer cannot be cancelled.</p> <p>After a certificate transfer is cancelled, the status of the certificate changes from PENDING_TRANSFER to INACTIVE.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelCertificateTransfer</a> action.</p>
    **/
    cancelCertificateTransfer(req: operations.CancelCertificateTransferRequest, config?: AxiosRequestConfig): Promise<operations.CancelCertificateTransferResponse>;
    /**
     * cancelDetectMitigationActionsTask - <p> Cancels a Device Defender ML Detect mitigation action. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelDetectMitigationActionsTask</a> action.</p>
    **/
    cancelDetectMitigationActionsTask(req: operations.CancelDetectMitigationActionsTaskRequest, config?: AxiosRequestConfig): Promise<operations.CancelDetectMitigationActionsTaskResponse>;
    /**
     * cancelJob - <p>Cancels a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelJob</a> action.</p>
    **/
    cancelJob(req: operations.CancelJobRequest, config?: AxiosRequestConfig): Promise<operations.CancelJobResponse>;
    /**
     * cancelJobExecution - <p>Cancels the execution of a job for a given thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelJobExecution</a> action.</p>
    **/
    cancelJobExecution(req: operations.CancelJobExecutionRequest, config?: AxiosRequestConfig): Promise<operations.CancelJobExecutionResponse>;
    /**
     * clearDefaultAuthorizer - <p>Clears the default authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ClearDefaultAuthorizer</a> action.</p>
    **/
    clearDefaultAuthorizer(req: operations.ClearDefaultAuthorizerRequest, config?: AxiosRequestConfig): Promise<operations.ClearDefaultAuthorizerResponse>;
    /**
     * confirmTopicRuleDestination - <p>Confirms a topic rule destination. When you create a rule requiring a destination, IoT sends a confirmation message to the endpoint or base address you specify. The message includes a token which you pass back when calling <code>ConfirmTopicRuleDestination</code> to confirm that you own or have access to the endpoint.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ConfirmTopicRuleDestination</a> action.</p>
    **/
    confirmTopicRuleDestination(req: operations.ConfirmTopicRuleDestinationRequest, config?: AxiosRequestConfig): Promise<operations.ConfirmTopicRuleDestinationResponse>;
    /**
     * createAuditSuppression - <p> Creates a Device Defender audit suppression. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateAuditSuppression</a> action.</p>
    **/
    createAuditSuppression(req: operations.CreateAuditSuppressionRequest, config?: AxiosRequestConfig): Promise<operations.CreateAuditSuppressionResponse>;
    /**
     * createAuthorizer - <p>Creates an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateAuthorizer</a> action.</p>
    **/
    createAuthorizer(req: operations.CreateAuthorizerRequest, config?: AxiosRequestConfig): Promise<operations.CreateAuthorizerResponse>;
    /**
     * createBillingGroup - <p>Creates a billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateBillingGroup</a> action.</p>
    **/
    createBillingGroup(req: operations.CreateBillingGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateBillingGroupResponse>;
    /**
     * createCertificateFromCsr - <p>Creates an X.509 certificate using the specified certificate signing request.</p> <p> <b>Note:</b> The CSR must include a public key that is either an RSA key with a length of at least 2048 bits or an ECC key from NIST P-256 or NIST P-384 curves. </p> <p> <b>Note:</b> Reusing the same certificate signing request (CSR) results in a distinct certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateCertificateFromCsr</a> action.</p> <p>You can create multiple certificates in a batch by creating a directory, copying multiple .csr files into that directory, and then specifying that directory on the command line. The following commands show how to create a batch of certificates given a batch of CSRs.</p> <p>Assuming a set of CSRs are located inside of the directory my-csr-directory:</p> <p>On Linux and OS X, the command is:</p> <p>$ ls my-csr-directory/ | xargs -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{}</p> <p>This command lists all of the CSRs in my-csr-directory and pipes each CSR file name to the aws iot create-certificate-from-csr Amazon Web Services CLI command to create a certificate for the corresponding CSR.</p> <p>The aws iot create-certificate-from-csr part of the command can also be run in parallel to speed up the certificate creation process:</p> <p>$ ls my-csr-directory/ | xargs -P 10 -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{}</p> <p>On Windows PowerShell, the command to create certificates for all CSRs in my-csr-directory is:</p> <p>&gt; ls -Name my-csr-directory | %{aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/$_}</p> <p>On a Windows command prompt, the command to create certificates for all CSRs in my-csr-directory is:</p> <p>&gt; forfiles /p my-csr-directory /c "cmd /c aws iot create-certificate-from-csr --certificate-signing-request file://@path"</p>
    **/
    createCertificateFromCsr(req: operations.CreateCertificateFromCsrRequest, config?: AxiosRequestConfig): Promise<operations.CreateCertificateFromCsrResponse>;
    /**
     * createCustomMetric - <p> Use this API to define a Custom Metric published by your devices to Device Defender. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateCustomMetric</a> action.</p>
    **/
    createCustomMetric(req: operations.CreateCustomMetricRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomMetricResponse>;
    /**
     * createDimension - <p>Create a dimension that you can use to limit the scope of a metric used in a security profile for IoT Device Defender. For example, using a <code>TOPIC_FILTER</code> dimension, you can narrow down the scope of the metric only to MQTT topics whose name match the pattern specified in the dimension.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDimension</a> action.</p>
    **/
    createDimension(req: operations.CreateDimensionRequest, config?: AxiosRequestConfig): Promise<operations.CreateDimensionResponse>;
    /**
     * createDomainConfiguration - <p>Creates a domain configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDomainConfiguration</a> action.</p>
    **/
    createDomainConfiguration(req: operations.CreateDomainConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomainConfigurationResponse>;
    /**
     * createDynamicThingGroup - <p>Creates a dynamic thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDynamicThingGroup</a> action.</p>
    **/
    createDynamicThingGroup(req: operations.CreateDynamicThingGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateDynamicThingGroupResponse>;
    /**
     * createFleetMetric - <p>Creates a fleet metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateFleetMetric</a> action.</p>
    **/
    createFleetMetric(req: operations.CreateFleetMetricRequest, config?: AxiosRequestConfig): Promise<operations.CreateFleetMetricResponse>;
    /**
     * createJob - <p>Creates a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateJob</a> action.</p>
    **/
    createJob(req: operations.CreateJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateJobResponse>;
    /**
     * createJobTemplate - <p>Creates a job template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateJobTemplate</a> action.</p>
    **/
    createJobTemplate(req: operations.CreateJobTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateJobTemplateResponse>;
    /**
     * createKeysAndCertificate - <p>Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued public key. You can also call <code>CreateKeysAndCertificate</code> over MQTT from a device, for more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-wo-cert.html#provision-mqtt-api">Provisioning MQTT API</a>.</p> <p> <b>Note</b> This is the only time IoT issues the private key for this certificate, so it is important to keep it in a secure location.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateKeysAndCertificate</a> action.</p>
    **/
    createKeysAndCertificate(req: operations.CreateKeysAndCertificateRequest, config?: AxiosRequestConfig): Promise<operations.CreateKeysAndCertificateResponse>;
    /**
     * createMitigationAction - <p>Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. Only certain types of mitigation actions can be applied to specific check names. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-mitigation-actions.html">Mitigation actions</a>. Each mitigation action can apply only one type of change.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateMitigationAction</a> action.</p>
    **/
    createMitigationAction(req: operations.CreateMitigationActionRequest, config?: AxiosRequestConfig): Promise<operations.CreateMitigationActionResponse>;
    /**
     * createOtaUpdate - <p>Creates an IoT OTA update on a target group of things or groups.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateOTAUpdate</a> action.</p>
    **/
    createOtaUpdate(req: operations.CreateOtaUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CreateOtaUpdateResponse>;
    /**
     * createPolicy - <p>Creates an IoT policy.</p> <p>The created policy is the default version for the policy. This operation creates a policy version with a version identifier of <b>1</b> and sets <b>1</b> as the policy's default version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreatePolicy</a> action.</p>
    **/
    createPolicy(req: operations.CreatePolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreatePolicyResponse>;
    /**
     * createPolicyVersion - <p>Creates a new version of the specified IoT policy. To update a policy, create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must use <a>DeletePolicyVersion</a> to delete an existing version before you create a new one.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the operative version (that is, the version that is in effect for the certificates to which the policy is attached).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreatePolicyVersion</a> action.</p>
    **/
    createPolicyVersion(req: operations.CreatePolicyVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreatePolicyVersionResponse>;
    /**
     * createProvisioningClaim - <p>Creates a provisioning claim.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningClaim</a> action.</p>
    **/
    createProvisioningClaim(req: operations.CreateProvisioningClaimRequest, config?: AxiosRequestConfig): Promise<operations.CreateProvisioningClaimResponse>;
    /**
     * createProvisioningTemplate - <p>Creates a fleet provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningTemplate</a> action.</p>
    **/
    createProvisioningTemplate(req: operations.CreateProvisioningTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateProvisioningTemplateResponse>;
    /**
     * createProvisioningTemplateVersion - <p>Creates a new version of a fleet provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningTemplateVersion</a> action.</p>
    **/
    createProvisioningTemplateVersion(req: operations.CreateProvisioningTemplateVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateProvisioningTemplateVersionResponse>;
    /**
     * createRoleAlias - <p>Creates a role alias.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateRoleAlias</a> action.</p>
    **/
    createRoleAlias(req: operations.CreateRoleAliasRequest, config?: AxiosRequestConfig): Promise<operations.CreateRoleAliasResponse>;
    /**
     * createScheduledAudit - <p>Creates a scheduled audit that is run at a specified time interval.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateScheduledAudit</a> action.</p>
    **/
    createScheduledAudit(req: operations.CreateScheduledAuditRequest, config?: AxiosRequestConfig): Promise<operations.CreateScheduledAuditResponse>;
    /**
     * createSecurityProfile - <p>Creates a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSecurityProfile</a> action.</p>
    **/
    createSecurityProfile(req: operations.CreateSecurityProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateSecurityProfileResponse>;
    /**
     * createStream - <p>Creates a stream for delivering one or more large files in chunks over MQTT. A stream transports data bytes in chunks or blocks packaged as MQTT messages from a source like S3. You can have one or more files associated with a stream.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateStream</a> action.</p>
    **/
    createStream(req: operations.CreateStreamRequest, config?: AxiosRequestConfig): Promise<operations.CreateStreamResponse>;
    /**
     * createThing - <p>Creates a thing record in the registry. If this call is made multiple times using the same thing name and configuration, the call will succeed. If this call is made with the same thing name but different configuration a <code>ResourceAlreadyExistsException</code> is thrown.</p> <note> <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for information about authorizing control plane actions.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThing</a> action.</p>
    **/
    createThing(req: operations.CreateThingRequest, config?: AxiosRequestConfig): Promise<operations.CreateThingResponse>;
    /**
     * createThingGroup - <p>Create a thing group.</p> <note> <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for information about authorizing control plane actions.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThingGroup</a> action.</p>
    **/
    createThingGroup(req: operations.CreateThingGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateThingGroupResponse>;
    /**
     * createThingType - <p>Creates a new thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThingType</a> action.</p>
    **/
    createThingType(req: operations.CreateThingTypeRequest, config?: AxiosRequestConfig): Promise<operations.CreateThingTypeResponse>;
    /**
     * createTopicRule - <p>Creates a rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateTopicRule</a> action.</p>
    **/
    createTopicRule(req: operations.CreateTopicRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateTopicRuleResponse>;
    /**
     * createTopicRuleDestination - <p>Creates a topic rule destination. The destination must be confirmed prior to use.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateTopicRuleDestination</a> action.</p>
    **/
    createTopicRuleDestination(req: operations.CreateTopicRuleDestinationRequest, config?: AxiosRequestConfig): Promise<operations.CreateTopicRuleDestinationResponse>;
    /**
     * deleteAccountAuditConfiguration - <p>Restores the default settings for Device Defender audits for this account. Any configuration data you entered is deleted and all audit checks are reset to disabled. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAccountAuditConfiguration</a> action.</p>
    **/
    deleteAccountAuditConfiguration(req: operations.DeleteAccountAuditConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccountAuditConfigurationResponse>;
    /**
     * deleteAuditSuppression - <p> Deletes a Device Defender audit suppression. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAuditSuppression</a> action.</p>
    **/
    deleteAuditSuppression(req: operations.DeleteAuditSuppressionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAuditSuppressionResponse>;
    /**
     * deleteAuthorizer - <p>Deletes an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAuthorizer</a> action.</p>
    **/
    deleteAuthorizer(req: operations.DeleteAuthorizerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAuthorizerResponse>;
    /**
     * deleteBillingGroup - <p>Deletes the billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteBillingGroup</a> action.</p>
    **/
    deleteBillingGroup(req: operations.DeleteBillingGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBillingGroupResponse>;
    /**
     * deleteCaCertificate - <p>Deletes a registered CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCACertificate</a> action.</p>
    **/
    deleteCaCertificate(req: operations.DeleteCaCertificateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCaCertificateResponse>;
    /**
     * deleteCertificate - <p>Deletes the specified certificate.</p> <p>A certificate cannot be deleted if it has a policy or IoT thing attached to it or if its status is set to ACTIVE. To delete a certificate, first use the <a>DetachPolicy</a> action to detach all policies. Next, use the <a>UpdateCertificate</a> action to set the certificate to the INACTIVE status.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCertificate</a> action.</p>
    **/
    deleteCertificate(req: operations.DeleteCertificateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCertificateResponse>;
    /**
     * deleteCustomMetric - <p> Deletes a Device Defender detect custom metric. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCustomMetric</a> action.</p> <note> <p>Before you can delete a custom metric, you must first remove the custom metric from all security profiles it's a part of. The security profile associated with the custom metric can be found using the <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfiles.html">ListSecurityProfiles</a> API with <code>metricName</code> set to your custom metric name.</p> </note>
    **/
    deleteCustomMetric(req: operations.DeleteCustomMetricRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomMetricResponse>;
    /**
     * deleteDimension - <p>Removes the specified dimension from your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDimension</a> action.</p>
    **/
    deleteDimension(req: operations.DeleteDimensionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDimensionResponse>;
    /**
     * deleteDomainConfiguration - <p>Deletes the specified domain configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDomainConfiguration</a> action.</p>
    **/
    deleteDomainConfiguration(req: operations.DeleteDomainConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDomainConfigurationResponse>;
    /**
     * deleteDynamicThingGroup - <p>Deletes a dynamic thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDynamicThingGroup</a> action.</p>
    **/
    deleteDynamicThingGroup(req: operations.DeleteDynamicThingGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDynamicThingGroupResponse>;
    /**
     * deleteFleetMetric - <p>Deletes the specified fleet metric. Returns successfully with no error if the deletion is successful or you specify a fleet metric that doesn't exist.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteFleetMetric</a> action.</p>
    **/
    deleteFleetMetric(req: operations.DeleteFleetMetricRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFleetMetricResponse>;
    /**
     * deleteJob - <p>Deletes a job and its related job executions.</p> <p>Deleting a job may take time, depending on the number of job executions created for the job and various other factors. While the job is being deleted, the status of the job will be shown as "DELETION_IN_PROGRESS". Attempting to delete or cancel a job whose status is already "DELETION_IN_PROGRESS" will result in an error.</p> <p>Only 10 jobs may have status "DELETION_IN_PROGRESS" at the same time, or a LimitExceededException will occur.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteJob</a> action.</p>
    **/
    deleteJob(req: operations.DeleteJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJobResponse>;
    /**
     * deleteJobExecution - <p>Deletes a job execution.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteJobExecution</a> action.</p>
    **/
    deleteJobExecution(req: operations.DeleteJobExecutionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJobExecutionResponse>;
    /**
     * deleteJobTemplate - Deletes the specified job template.
    **/
    deleteJobTemplate(req: operations.DeleteJobTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJobTemplateResponse>;
    /**
     * deleteMitigationAction - <p>Deletes a defined mitigation action from your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteMitigationAction</a> action.</p>
    **/
    deleteMitigationAction(req: operations.DeleteMitigationActionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMitigationActionResponse>;
    /**
     * deleteOtaUpdate - <p>Delete an OTA update.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteOTAUpdate</a> action.</p>
    **/
    deleteOtaUpdate(req: operations.DeleteOtaUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOtaUpdateResponse>;
    /**
     * deletePolicy - <p>Deletes the specified policy.</p> <p>A policy cannot be deleted if it has non-default versions or it is attached to any certificate.</p> <p>To delete a policy, use the <a>DeletePolicyVersion</a> action to delete all non-default versions of the policy; use the <a>DetachPolicy</a> action to detach the policy from any certificate; and then use the DeletePolicy action to delete the policy.</p> <p>When a policy is deleted using DeletePolicy, its default version is deleted with it.</p> <note> <p>Because of the distributed nature of Amazon Web Services, it can take up to five minutes after a policy is detached before it's ready to be deleted.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeletePolicy</a> action.</p>
    **/
    deletePolicy(req: operations.DeletePolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeletePolicyResponse>;
    /**
     * deletePolicyVersion - <p>Deletes the specified version of the specified policy. You cannot delete the default version of a policy using this action. To delete the default version of a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use ListPolicyVersions.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeletePolicyVersion</a> action.</p>
    **/
    deletePolicyVersion(req: operations.DeletePolicyVersionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePolicyVersionResponse>;
    /**
     * deleteProvisioningTemplate - <p>Deletes a fleet provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteProvisioningTemplate</a> action.</p>
    **/
    deleteProvisioningTemplate(req: operations.DeleteProvisioningTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProvisioningTemplateResponse>;
    /**
     * deleteProvisioningTemplateVersion - <p>Deletes a fleet provisioning template version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteProvisioningTemplateVersion</a> action.</p>
    **/
    deleteProvisioningTemplateVersion(req: operations.DeleteProvisioningTemplateVersionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProvisioningTemplateVersionResponse>;
    /**
     * deleteRegistrationCode - <p>Deletes a CA certificate registration code.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteRegistrationCode</a> action.</p>
    **/
    deleteRegistrationCode(req: operations.DeleteRegistrationCodeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRegistrationCodeResponse>;
    /**
     * deleteRoleAlias - <p>Deletes a role alias</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteRoleAlias</a> action.</p>
    **/
    deleteRoleAlias(req: operations.DeleteRoleAliasRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRoleAliasResponse>;
    /**
     * deleteScheduledAudit - <p>Deletes a scheduled audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteScheduledAudit</a> action.</p>
    **/
    deleteScheduledAudit(req: operations.DeleteScheduledAuditRequest, config?: AxiosRequestConfig): Promise<operations.DeleteScheduledAuditResponse>;
    /**
     * deleteSecurityProfile - <p>Deletes a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteSecurityProfile</a> action.</p>
    **/
    deleteSecurityProfile(req: operations.DeleteSecurityProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSecurityProfileResponse>;
    /**
     * deleteStream - <p>Deletes a stream.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteStream</a> action.</p>
    **/
    deleteStream(req: operations.DeleteStreamRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStreamResponse>;
    /**
     * deleteThing - <p>Deletes the specified thing. Returns successfully with no error if the deletion is successful or you specify a thing that doesn't exist.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThing</a> action.</p>
    **/
    deleteThing(req: operations.DeleteThingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteThingResponse>;
    /**
     * deleteThingGroup - <p>Deletes a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingGroup</a> action.</p>
    **/
    deleteThingGroup(req: operations.DeleteThingGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteThingGroupResponse>;
    /**
     * deleteThingType - <p>Deletes the specified thing type. You cannot delete a thing type if it has things associated with it. To delete a thing type, first mark it as deprecated by calling <a>DeprecateThingType</a>, then remove any associated things by calling <a>UpdateThing</a> to change the thing type on any associated thing, and finally use <a>DeleteThingType</a> to delete the thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingType</a> action.</p>
    **/
    deleteThingType(req: operations.DeleteThingTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteThingTypeResponse>;
    /**
     * deleteTopicRule - <p>Deletes the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteTopicRule</a> action.</p>
    **/
    deleteTopicRule(req: operations.DeleteTopicRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTopicRuleResponse>;
    /**
     * deleteTopicRuleDestination - <p>Deletes a topic rule destination.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteTopicRuleDestination</a> action.</p>
    **/
    deleteTopicRuleDestination(req: operations.DeleteTopicRuleDestinationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTopicRuleDestinationResponse>;
    /**
     * deleteV2LoggingLevel - <p>Deletes a logging level.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteV2LoggingLevel</a> action.</p>
    **/
    deleteV2LoggingLevel(req: operations.DeleteV2LoggingLevelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteV2LoggingLevelResponse>;
    /**
     * deprecateThingType - <p>Deprecates a thing type. You can not associate new things with deprecated thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeprecateThingType</a> action.</p>
    **/
    deprecateThingType(req: operations.DeprecateThingTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeprecateThingTypeResponse>;
    /**
     * describeAccountAuditConfiguration - <p>Gets information about the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAccountAuditConfiguration</a> action.</p>
    **/
    describeAccountAuditConfiguration(req: operations.DescribeAccountAuditConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAccountAuditConfigurationResponse>;
    /**
     * describeAuditFinding - <p>Gets information about a single audit finding. Properties include the reason for noncompliance, the severity of the issue, and the start time when the audit that returned the finding.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuditFinding</a> action.</p>
    **/
    describeAuditFinding(req: operations.DescribeAuditFindingRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAuditFindingResponse>;
    /**
     * describeAuditMitigationActionsTask - Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings. Properties include the actions being applied, the audit checks to which they're being applied, the task status, and aggregated task statistics.
    **/
    describeAuditMitigationActionsTask(req: operations.DescribeAuditMitigationActionsTaskRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAuditMitigationActionsTaskResponse>;
    /**
     * describeAuditSuppression -  Gets information about a Device Defender audit suppression.
    **/
    describeAuditSuppression(req: operations.DescribeAuditSuppressionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAuditSuppressionResponse>;
    /**
     * describeAuditTask - <p>Gets information about a Device Defender audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuditTask</a> action.</p>
    **/
    describeAuditTask(req: operations.DescribeAuditTaskRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAuditTaskResponse>;
    /**
     * describeAuthorizer - <p>Describes an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuthorizer</a> action.</p>
    **/
    describeAuthorizer(req: operations.DescribeAuthorizerRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAuthorizerResponse>;
    /**
     * describeBillingGroup - <p>Returns information about a billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeBillingGroup</a> action.</p>
    **/
    describeBillingGroup(req: operations.DescribeBillingGroupRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBillingGroupResponse>;
    /**
     * describeCaCertificate - <p>Describes a registered CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCACertificate</a> action.</p>
    **/
    describeCaCertificate(req: operations.DescribeCaCertificateRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCaCertificateResponse>;
    /**
     * describeCertificate - <p>Gets information about the specified certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCertificate</a> action.</p>
    **/
    describeCertificate(req: operations.DescribeCertificateRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCertificateResponse>;
    /**
     * describeCustomMetric - <p> Gets information about a Device Defender detect custom metric. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCustomMetric</a> action.</p>
    **/
    describeCustomMetric(req: operations.DescribeCustomMetricRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCustomMetricResponse>;
    /**
     * describeDefaultAuthorizer - <p>Describes the default authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDefaultAuthorizer</a> action.</p>
    **/
    describeDefaultAuthorizer(req: operations.DescribeDefaultAuthorizerRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDefaultAuthorizerResponse>;
    /**
     * describeDetectMitigationActionsTask - <p> Gets information about a Device Defender ML Detect mitigation action. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDetectMitigationActionsTask</a> action.</p>
    **/
    describeDetectMitigationActionsTask(req: operations.DescribeDetectMitigationActionsTaskRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDetectMitigationActionsTaskResponse>;
    /**
     * describeDimension - <p>Provides details about a dimension that is defined in your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDimension</a> action.</p>
    **/
    describeDimension(req: operations.DescribeDimensionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDimensionResponse>;
    /**
     * describeDomainConfiguration - <p>Gets summary information about a domain configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDomainConfiguration</a> action.</p>
    **/
    describeDomainConfiguration(req: operations.DescribeDomainConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDomainConfigurationResponse>;
    /**
     * describeEndpoint - <p>Returns a unique endpoint specific to the Amazon Web Services account making the call.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeEndpoint</a> action.</p>
    **/
    describeEndpoint(req: operations.DescribeEndpointRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEndpointResponse>;
    /**
     * describeEventConfigurations - <p>Describes event configurations.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeEventConfigurations</a> action.</p>
    **/
    describeEventConfigurations(req: operations.DescribeEventConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEventConfigurationsResponse>;
    /**
     * describeFleetMetric - <p>Gets information about the specified fleet metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeFleetMetric</a> action.</p>
    **/
    describeFleetMetric(req: operations.DescribeFleetMetricRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFleetMetricResponse>;
    /**
     * describeIndex - <p>Describes a search index.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeIndex</a> action.</p>
    **/
    describeIndex(req: operations.DescribeIndexRequest, config?: AxiosRequestConfig): Promise<operations.DescribeIndexResponse>;
    /**
     * describeJob - <p>Describes a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeJob</a> action.</p>
    **/
    describeJob(req: operations.DescribeJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeJobResponse>;
    /**
     * describeJobExecution - <p>Describes a job execution.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeJobExecution</a> action.</p>
    **/
    describeJobExecution(req: operations.DescribeJobExecutionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeJobExecutionResponse>;
    /**
     * describeJobTemplate - Returns information about a job template.
    **/
    describeJobTemplate(req: operations.DescribeJobTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DescribeJobTemplateResponse>;
    /**
     * describeMitigationAction - <p>Gets information about a mitigation action.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeMitigationAction</a> action.</p>
    **/
    describeMitigationAction(req: operations.DescribeMitigationActionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeMitigationActionResponse>;
    /**
     * describeProvisioningTemplate - <p>Returns information about a fleet provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeProvisioningTemplate</a> action.</p>
    **/
    describeProvisioningTemplate(req: operations.DescribeProvisioningTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProvisioningTemplateResponse>;
    /**
     * describeProvisioningTemplateVersion - <p>Returns information about a fleet provisioning template version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeProvisioningTemplateVersion</a> action.</p>
    **/
    describeProvisioningTemplateVersion(req: operations.DescribeProvisioningTemplateVersionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProvisioningTemplateVersionResponse>;
    /**
     * describeRoleAlias - <p>Describes a role alias.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeRoleAlias</a> action.</p>
    **/
    describeRoleAlias(req: operations.DescribeRoleAliasRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRoleAliasResponse>;
    /**
     * describeScheduledAudit - <p>Gets information about a scheduled audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeScheduledAudit</a> action.</p>
    **/
    describeScheduledAudit(req: operations.DescribeScheduledAuditRequest, config?: AxiosRequestConfig): Promise<operations.DescribeScheduledAuditResponse>;
    /**
     * describeSecurityProfile - <p>Gets information about a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeSecurityProfile</a> action.</p>
    **/
    describeSecurityProfile(req: operations.DescribeSecurityProfileRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSecurityProfileResponse>;
    /**
     * describeStream - <p>Gets information about a stream.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeStream</a> action.</p>
    **/
    describeStream(req: operations.DescribeStreamRequest, config?: AxiosRequestConfig): Promise<operations.DescribeStreamResponse>;
    /**
     * describeThing - <p>Gets information about the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThing</a> action.</p>
    **/
    describeThing(req: operations.DescribeThingRequest, config?: AxiosRequestConfig): Promise<operations.DescribeThingResponse>;
    /**
     * describeThingGroup - <p>Describe a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingGroup</a> action.</p>
    **/
    describeThingGroup(req: operations.DescribeThingGroupRequest, config?: AxiosRequestConfig): Promise<operations.DescribeThingGroupResponse>;
    /**
     * describeThingRegistrationTask - <p>Describes a bulk thing provisioning task.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingRegistrationTask</a> action.</p>
    **/
    describeThingRegistrationTask(req: operations.DescribeThingRegistrationTaskRequest, config?: AxiosRequestConfig): Promise<operations.DescribeThingRegistrationTaskResponse>;
    /**
     * describeThingType - <p>Gets information about the specified thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingType</a> action.</p>
    **/
    describeThingType(req: operations.DescribeThingTypeRequest, config?: AxiosRequestConfig): Promise<operations.DescribeThingTypeResponse>;
    /**
     * detachPolicy - <p>Detaches a policy from the specified target.</p> <note> <p>Because of the distributed nature of Amazon Web Services, it can take up to five minutes after a policy is detached before it's ready to be deleted.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachPolicy</a> action.</p>
    **/
    detachPolicy(req: operations.DetachPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DetachPolicyResponse>;
    /**
     * detachPrincipalPolicy - <p>Removes the specified policy from the specified certificate.</p> <note> <p>This action is deprecated. Please use <a>DetachPolicy</a> instead.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachPrincipalPolicy</a> action.</p>
    **/
    detachPrincipalPolicy(req: operations.DetachPrincipalPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DetachPrincipalPolicyResponse>;
    /**
     * detachSecurityProfile - <p>Disassociates a Device Defender security profile from a thing group or from this account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachSecurityProfile</a> action.</p>
    **/
    detachSecurityProfile(req: operations.DetachSecurityProfileRequest, config?: AxiosRequestConfig): Promise<operations.DetachSecurityProfileResponse>;
    /**
     * detachThingPrincipal - <p>Detaches the specified principal from the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.</p> <note> <p>This call is asynchronous. It might take several seconds for the detachment to propagate.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachThingPrincipal</a> action.</p>
    **/
    detachThingPrincipal(req: operations.DetachThingPrincipalRequest, config?: AxiosRequestConfig): Promise<operations.DetachThingPrincipalResponse>;
    /**
     * disableTopicRule - <p>Disables the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DisableTopicRule</a> action.</p>
    **/
    disableTopicRule(req: operations.DisableTopicRuleRequest, config?: AxiosRequestConfig): Promise<operations.DisableTopicRuleResponse>;
    /**
     * enableTopicRule - <p>Enables the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">EnableTopicRule</a> action.</p>
    **/
    enableTopicRule(req: operations.EnableTopicRuleRequest, config?: AxiosRequestConfig): Promise<operations.EnableTopicRuleResponse>;
    /**
     * getBehaviorModelTrainingSummaries - <p> Returns a Device Defender's ML Detect Security Profile training model's status. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetBehaviorModelTrainingSummaries</a> action.</p>
    **/
    getBehaviorModelTrainingSummaries(req: operations.GetBehaviorModelTrainingSummariesRequest, config?: AxiosRequestConfig): Promise<operations.GetBehaviorModelTrainingSummariesResponse>;
    /**
     * getBucketsAggregation - <p>Aggregates on indexed data with search queries pertaining to particular fields. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetBucketsAggregation</a> action.</p>
    **/
    getBucketsAggregation(req: operations.GetBucketsAggregationRequest, config?: AxiosRequestConfig): Promise<operations.GetBucketsAggregationResponse>;
    /**
     * getCardinality - <p>Returns the approximate count of unique values that match the query.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetCardinality</a> action.</p>
    **/
    getCardinality(req: operations.GetCardinalityRequest, config?: AxiosRequestConfig): Promise<operations.GetCardinalityResponse>;
    /**
     * getEffectivePolicies - <p>Gets a list of the policies that have an effect on the authorization behavior of the specified device when it connects to the IoT device gateway.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetEffectivePolicies</a> action.</p>
    **/
    getEffectivePolicies(req: operations.GetEffectivePoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetEffectivePoliciesResponse>;
    /**
     * getIndexingConfiguration - <p>Gets the indexing configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetIndexingConfiguration</a> action.</p>
    **/
    getIndexingConfiguration(req: operations.GetIndexingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetIndexingConfigurationResponse>;
    /**
     * getJobDocument - <p>Gets a job document.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetJobDocument</a> action.</p>
    **/
    getJobDocument(req: operations.GetJobDocumentRequest, config?: AxiosRequestConfig): Promise<operations.GetJobDocumentResponse>;
    /**
     * getLoggingOptions - <p>Gets the logging options.</p> <p>NOTE: use of this command is not recommended. Use <code>GetV2LoggingOptions</code> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetLoggingOptions</a> action.</p>
    **/
    getLoggingOptions(req: operations.GetLoggingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetLoggingOptionsResponse>;
    /**
     * getOtaUpdate - <p>Gets an OTA update.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetOTAUpdate</a> action.</p>
    **/
    getOtaUpdate(req: operations.GetOtaUpdateRequest, config?: AxiosRequestConfig): Promise<operations.GetOtaUpdateResponse>;
    /**
     * getPercentiles - <p>Groups the aggregated values that match the query into percentile groupings. The default percentile groupings are: 1,5,25,50,75,95,99, although you can specify your own when you call <code>GetPercentiles</code>. This function returns a value for each percentile group specified (or the default percentile groupings). The percentile group "1" contains the aggregated field value that occurs in approximately one percent of the values that match the query. The percentile group "5" contains the aggregated field value that occurs in approximately five percent of the values that match the query, and so on. The result is an approximation, the more values that match the query, the more accurate the percentile values.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPercentiles</a> action.</p>
    **/
    getPercentiles(req: operations.GetPercentilesRequest, config?: AxiosRequestConfig): Promise<operations.GetPercentilesResponse>;
    /**
     * getPolicy - <p>Gets information about the specified policy with the policy document of the default version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPolicy</a> action.</p>
    **/
    getPolicy(req: operations.GetPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetPolicyResponse>;
    /**
     * getPolicyVersion - <p>Gets information about the specified policy version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPolicyVersion</a> action.</p>
    **/
    getPolicyVersion(req: operations.GetPolicyVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetPolicyVersionResponse>;
    /**
     * getRegistrationCode - <p>Gets a registration code used to register a CA certificate with IoT.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetRegistrationCode</a> action.</p>
    **/
    getRegistrationCode(req: operations.GetRegistrationCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetRegistrationCodeResponse>;
    /**
     * getStatistics - <p>Returns the count, average, sum, minimum, maximum, sum of squares, variance, and standard deviation for the specified aggregated field. If the aggregation field is of type <code>String</code>, only the count statistic is returned.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetStatistics</a> action.</p>
    **/
    getStatistics(req: operations.GetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetStatisticsResponse>;
    /**
     * getTopicRule - <p>Gets information about the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetTopicRule</a> action.</p>
    **/
    getTopicRule(req: operations.GetTopicRuleRequest, config?: AxiosRequestConfig): Promise<operations.GetTopicRuleResponse>;
    /**
     * getTopicRuleDestination - <p>Gets information about a topic rule destination.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetTopicRuleDestination</a> action.</p>
    **/
    getTopicRuleDestination(req: operations.GetTopicRuleDestinationRequest, config?: AxiosRequestConfig): Promise<operations.GetTopicRuleDestinationResponse>;
    /**
     * getV2LoggingOptions - <p>Gets the fine grained logging options.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetV2LoggingOptions</a> action.</p>
    **/
    getV2LoggingOptions(req: operations.GetV2LoggingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetV2LoggingOptionsResponse>;
    /**
     * listActiveViolations - <p>Lists the active violations for a given Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListActiveViolations</a> action.</p>
    **/
    listActiveViolations(req: operations.ListActiveViolationsRequest, config?: AxiosRequestConfig): Promise<operations.ListActiveViolationsResponse>;
    /**
     * listAttachedPolicies - <p>Lists the policies attached to the specified thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAttachedPolicies</a> action.</p>
    **/
    listAttachedPolicies(req: operations.ListAttachedPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.ListAttachedPoliciesResponse>;
    /**
     * listAuditFindings - <p>Lists the findings (results) of a Device Defender audit or of the audits performed during a specified time period. (Findings are retained for 90 days.)</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditFindings</a> action.</p>
    **/
    listAuditFindings(req: operations.ListAuditFindingsRequest, config?: AxiosRequestConfig): Promise<operations.ListAuditFindingsResponse>;
    /**
     * listAuditMitigationActionsExecutions - <p>Gets the status of audit mitigation action tasks that were executed.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditMitigationActionsExecutions</a> action.</p>
    **/
    listAuditMitigationActionsExecutions(req: operations.ListAuditMitigationActionsExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.ListAuditMitigationActionsExecutionsResponse>;
    /**
     * listAuditMitigationActionsTasks - <p>Gets a list of audit mitigation action tasks that match the specified filters.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditMitigationActionsTasks</a> action.</p>
    **/
    listAuditMitigationActionsTasks(req: operations.ListAuditMitigationActionsTasksRequest, config?: AxiosRequestConfig): Promise<operations.ListAuditMitigationActionsTasksResponse>;
    /**
     * listAuditSuppressions - <p> Lists your Device Defender audit listings. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditSuppressions</a> action.</p>
    **/
    listAuditSuppressions(req: operations.ListAuditSuppressionsRequest, config?: AxiosRequestConfig): Promise<operations.ListAuditSuppressionsResponse>;
    /**
     * listAuditTasks - <p>Lists the Device Defender audits that have been performed during a given time period.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditTasks</a> action.</p>
    **/
    listAuditTasks(req: operations.ListAuditTasksRequest, config?: AxiosRequestConfig): Promise<operations.ListAuditTasksResponse>;
    /**
     * listAuthorizers - <p>Lists the authorizers registered in your account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuthorizers</a> action.</p>
    **/
    listAuthorizers(req: operations.ListAuthorizersRequest, config?: AxiosRequestConfig): Promise<operations.ListAuthorizersResponse>;
    /**
     * listBillingGroups - <p>Lists the billing groups you have created.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListBillingGroups</a> action.</p>
    **/
    listBillingGroups(req: operations.ListBillingGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListBillingGroupsResponse>;
    /**
     * listCaCertificates - <p>Lists the CA certificates registered for your Amazon Web Services account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCACertificates</a> action.</p>
    **/
    listCaCertificates(req: operations.ListCaCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.ListCaCertificatesResponse>;
    /**
     * listCertificates - <p>Lists the certificates registered in your Amazon Web Services account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCertificates</a> action.</p>
    **/
    listCertificates(req: operations.ListCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.ListCertificatesResponse>;
    /**
     * listCertificatesByCa - <p>List the device certificates signed by the specified CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCertificatesByCA</a> action.</p>
    **/
    listCertificatesByCa(req: operations.ListCertificatesByCaRequest, config?: AxiosRequestConfig): Promise<operations.ListCertificatesByCaResponse>;
    /**
     * listCustomMetrics - <p> Lists your Device Defender detect custom metrics. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCustomMetrics</a> action.</p>
    **/
    listCustomMetrics(req: operations.ListCustomMetricsRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomMetricsResponse>;
    /**
     * listDetectMitigationActionsExecutions - <p> Lists mitigation actions executions for a Device Defender ML Detect Security Profile. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDetectMitigationActionsExecutions</a> action.</p>
    **/
    listDetectMitigationActionsExecutions(req: operations.ListDetectMitigationActionsExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.ListDetectMitigationActionsExecutionsResponse>;
    /**
     * listDetectMitigationActionsTasks - <p> List of Device Defender ML Detect mitigation actions tasks. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDetectMitigationActionsTasks</a> action.</p>
    **/
    listDetectMitigationActionsTasks(req: operations.ListDetectMitigationActionsTasksRequest, config?: AxiosRequestConfig): Promise<operations.ListDetectMitigationActionsTasksResponse>;
    /**
     * listDimensions - <p>List the set of dimensions that are defined for your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDimensions</a> action.</p>
    **/
    listDimensions(req: operations.ListDimensionsRequest, config?: AxiosRequestConfig): Promise<operations.ListDimensionsResponse>;
    /**
     * listDomainConfigurations - <p>Gets a list of domain configurations for the user. This list is sorted alphabetically by domain configuration name.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDomainConfigurations</a> action.</p>
    **/
    listDomainConfigurations(req: operations.ListDomainConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.ListDomainConfigurationsResponse>;
    /**
     * listFleetMetrics - <p>Lists all your fleet metrics. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListFleetMetrics</a> action.</p>
    **/
    listFleetMetrics(req: operations.ListFleetMetricsRequest, config?: AxiosRequestConfig): Promise<operations.ListFleetMetricsResponse>;
    /**
     * listIndices - <p>Lists the search indices.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListIndices</a> action.</p>
    **/
    listIndices(req: operations.ListIndicesRequest, config?: AxiosRequestConfig): Promise<operations.ListIndicesResponse>;
    /**
     * listJobExecutionsForJob - <p>Lists the job executions for a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobExecutionsForJob</a> action.</p>
    **/
    listJobExecutionsForJob(req: operations.ListJobExecutionsForJobRequest, config?: AxiosRequestConfig): Promise<operations.ListJobExecutionsForJobResponse>;
    /**
     * listJobExecutionsForThing - <p>Lists the job executions for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobExecutionsForThing</a> action.</p>
    **/
    listJobExecutionsForThing(req: operations.ListJobExecutionsForThingRequest, config?: AxiosRequestConfig): Promise<operations.ListJobExecutionsForThingResponse>;
    /**
     * listJobTemplates - <p>Returns a list of job templates.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobTemplates</a> action.</p>
    **/
    listJobTemplates(req: operations.ListJobTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListJobTemplatesResponse>;
    /**
     * listJobs - <p>Lists jobs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobs</a> action.</p>
    **/
    listJobs(req: operations.ListJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListJobsResponse>;
    /**
     * listMitigationActions - <p>Gets a list of all mitigation actions that match the specified filter criteria.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListMitigationActions</a> action.</p>
    **/
    listMitigationActions(req: operations.ListMitigationActionsRequest, config?: AxiosRequestConfig): Promise<operations.ListMitigationActionsResponse>;
    /**
     * listOtaUpdates - <p>Lists OTA updates.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListOTAUpdates</a> action.</p>
    **/
    listOtaUpdates(req: operations.ListOtaUpdatesRequest, config?: AxiosRequestConfig): Promise<operations.ListOtaUpdatesResponse>;
    /**
     * listOutgoingCertificates - <p>Lists certificates that are being transferred but not yet accepted.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListOutgoingCertificates</a> action.</p>
    **/
    listOutgoingCertificates(req: operations.ListOutgoingCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.ListOutgoingCertificatesResponse>;
    /**
     * listPolicies - <p>Lists your policies.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicies</a> action.</p>
    **/
    listPolicies(req: operations.ListPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.ListPoliciesResponse>;
    /**
     * listPolicyPrincipals - <p>Lists the principals associated with the specified policy.</p> <p> <b>Note:</b> This action is deprecated. Please use <a>ListTargetsForPolicy</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicyPrincipals</a> action.</p>
    **/
    listPolicyPrincipals(req: operations.ListPolicyPrincipalsRequest, config?: AxiosRequestConfig): Promise<operations.ListPolicyPrincipalsResponse>;
    /**
     * listPolicyVersions - <p>Lists the versions of the specified policy and identifies the default version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicyVersions</a> action.</p>
    **/
    listPolicyVersions(req: operations.ListPolicyVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListPolicyVersionsResponse>;
    /**
     * listPrincipalPolicies - <p>Lists the policies attached to the specified principal. If you use an Cognito identity, the ID must be in <a href="https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html#API_GetCredentialsForIdentity_RequestSyntax">AmazonCognito Identity format</a>.</p> <p> <b>Note:</b> This action is deprecated. Please use <a>ListAttachedPolicies</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPrincipalPolicies</a> action.</p>
    **/
    listPrincipalPolicies(req: operations.ListPrincipalPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.ListPrincipalPoliciesResponse>;
    /**
     * listPrincipalThings - <p>Lists the things associated with the specified principal. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPrincipalThings</a> action.</p>
    **/
    listPrincipalThings(req: operations.ListPrincipalThingsRequest, config?: AxiosRequestConfig): Promise<operations.ListPrincipalThingsResponse>;
    /**
     * listProvisioningTemplateVersions - <p>A list of fleet provisioning template versions.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListProvisioningTemplateVersions</a> action.</p>
    **/
    listProvisioningTemplateVersions(req: operations.ListProvisioningTemplateVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListProvisioningTemplateVersionsResponse>;
    /**
     * listProvisioningTemplates - <p>Lists the fleet provisioning templates in your Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListProvisioningTemplates</a> action.</p>
    **/
    listProvisioningTemplates(req: operations.ListProvisioningTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListProvisioningTemplatesResponse>;
    /**
     * listRoleAliases - <p>Lists the role aliases registered in your account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListRoleAliases</a> action.</p>
    **/
    listRoleAliases(req: operations.ListRoleAliasesRequest, config?: AxiosRequestConfig): Promise<operations.ListRoleAliasesResponse>;
    /**
     * listScheduledAudits - <p>Lists all of your scheduled audits.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListScheduledAudits</a> action.</p>
    **/
    listScheduledAudits(req: operations.ListScheduledAuditsRequest, config?: AxiosRequestConfig): Promise<operations.ListScheduledAuditsResponse>;
    /**
     * listSecurityProfiles - <p>Lists the Device Defender security profiles you've created. You can filter security profiles by dimension or custom metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSecurityProfiles</a> action.</p> <note> <p> <code>dimensionName</code> and <code>metricName</code> cannot be used in the same request.</p> </note>
    **/
    listSecurityProfiles(req: operations.ListSecurityProfilesRequest, config?: AxiosRequestConfig): Promise<operations.ListSecurityProfilesResponse>;
    /**
     * listSecurityProfilesForTarget - <p>Lists the Device Defender security profiles attached to a target (thing group).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSecurityProfilesForTarget</a> action.</p>
    **/
    listSecurityProfilesForTarget(req: operations.ListSecurityProfilesForTargetRequest, config?: AxiosRequestConfig): Promise<operations.ListSecurityProfilesForTargetResponse>;
    /**
     * listStreams - <p>Lists all of the streams in your Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListStreams</a> action.</p>
    **/
    listStreams(req: operations.ListStreamsRequest, config?: AxiosRequestConfig): Promise<operations.ListStreamsResponse>;
    /**
     * listTagsForResource - <p>Lists the tags (metadata) you have assigned to the resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTagsForResource</a> action.</p>
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * listTargetsForPolicy - <p>List targets for the specified policy.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTargetsForPolicy</a> action.</p>
    **/
    listTargetsForPolicy(req: operations.ListTargetsForPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ListTargetsForPolicyResponse>;
    /**
     * listTargetsForSecurityProfile - <p>Lists the targets (thing groups) associated with a given Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTargetsForSecurityProfile</a> action.</p>
    **/
    listTargetsForSecurityProfile(req: operations.ListTargetsForSecurityProfileRequest, config?: AxiosRequestConfig): Promise<operations.ListTargetsForSecurityProfileResponse>;
    /**
     * listThingGroups - <p>List the thing groups in your account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingGroups</a> action.</p>
    **/
    listThingGroups(req: operations.ListThingGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListThingGroupsResponse>;
    /**
     * listThingGroupsForThing - <p>List the thing groups to which the specified thing belongs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingGroupsForThing</a> action.</p>
    **/
    listThingGroupsForThing(req: operations.ListThingGroupsForThingRequest, config?: AxiosRequestConfig): Promise<operations.ListThingGroupsForThingResponse>;
    /**
     * listThingPrincipals - <p>Lists the principals associated with the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingPrincipals</a> action.</p>
    **/
    listThingPrincipals(req: operations.ListThingPrincipalsRequest, config?: AxiosRequestConfig): Promise<operations.ListThingPrincipalsResponse>;
    /**
     * listThingRegistrationTaskReports - Information about the thing registration tasks.
    **/
    listThingRegistrationTaskReports(req: operations.ListThingRegistrationTaskReportsRequest, config?: AxiosRequestConfig): Promise<operations.ListThingRegistrationTaskReportsResponse>;
    /**
     * listThingRegistrationTasks - <p>List bulk thing provisioning tasks.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingRegistrationTasks</a> action.</p>
    **/
    listThingRegistrationTasks(req: operations.ListThingRegistrationTasksRequest, config?: AxiosRequestConfig): Promise<operations.ListThingRegistrationTasksResponse>;
    /**
     * listThingTypes - <p>Lists the existing thing types.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingTypes</a> action.</p>
    **/
    listThingTypes(req: operations.ListThingTypesRequest, config?: AxiosRequestConfig): Promise<operations.ListThingTypesResponse>;
    /**
     * listThings - <p>Lists your things. Use the <b>attributeName</b> and <b>attributeValue</b> parameters to filter your things. For example, calling <code>ListThings</code> with attributeName=Color and attributeValue=Red retrieves all things in the registry that contain an attribute <b>Color</b> with the value <b>Red</b>. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThings</a> action.</p> <note> <p>You will not be charged for calling this API if an <code>Access denied</code> error is returned. You will also not be charged if no attributes or pagination token was provided in request and no pagination token and no results were returned.</p> </note>
    **/
    listThings(req: operations.ListThingsRequest, config?: AxiosRequestConfig): Promise<operations.ListThingsResponse>;
    /**
     * listThingsInBillingGroup - <p>Lists the things you have added to the given billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingsInBillingGroup</a> action.</p>
    **/
    listThingsInBillingGroup(req: operations.ListThingsInBillingGroupRequest, config?: AxiosRequestConfig): Promise<operations.ListThingsInBillingGroupResponse>;
    /**
     * listThingsInThingGroup - <p>Lists the things in the specified group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingsInThingGroup</a> action.</p>
    **/
    listThingsInThingGroup(req: operations.ListThingsInThingGroupRequest, config?: AxiosRequestConfig): Promise<operations.ListThingsInThingGroupResponse>;
    /**
     * listTopicRuleDestinations - <p>Lists all the topic rule destinations in your Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTopicRuleDestinations</a> action.</p>
    **/
    listTopicRuleDestinations(req: operations.ListTopicRuleDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.ListTopicRuleDestinationsResponse>;
    /**
     * listTopicRules - <p>Lists the rules for the specific topic.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTopicRules</a> action.</p>
    **/
    listTopicRules(req: operations.ListTopicRulesRequest, config?: AxiosRequestConfig): Promise<operations.ListTopicRulesResponse>;
    /**
     * listV2LoggingLevels - <p>Lists logging levels.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListV2LoggingLevels</a> action.</p>
    **/
    listV2LoggingLevels(req: operations.ListV2LoggingLevelsRequest, config?: AxiosRequestConfig): Promise<operations.ListV2LoggingLevelsResponse>;
    /**
     * listViolationEvents - <p>Lists the Device Defender security profile violations discovered during the given time period. You can use filters to limit the results to those alerts issued for a particular security profile, behavior, or thing (device).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListViolationEvents</a> action.</p>
    **/
    listViolationEvents(req: operations.ListViolationEventsRequest, config?: AxiosRequestConfig): Promise<operations.ListViolationEventsResponse>;
    /**
     * registerCaCertificate - <p>Registers a CA certificate with IoT. This CA certificate can then be used to sign device certificates, which can be then registered with IoT. You can register up to 10 CA certificates per Amazon Web Services account that have the same subject field. This enables you to have up to 10 certificate authorities sign your device certificates. If you have more than one CA certificate registered, make sure you pass the CA certificate when you register your device certificates with the <a>RegisterCertificate</a> action.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterCACertificate</a> action.</p>
    **/
    registerCaCertificate(req: operations.RegisterCaCertificateRequest, config?: AxiosRequestConfig): Promise<operations.RegisterCaCertificateResponse>;
    /**
     * registerCertificate - <p>Registers a device certificate with IoT. If you have more than one CA certificate that has the same subject field, you must specify the CA certificate that was used to sign the device certificate being registered.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterCertificate</a> action.</p>
    **/
    registerCertificate(req: operations.RegisterCertificateRequest, config?: AxiosRequestConfig): Promise<operations.RegisterCertificateResponse>;
    /**
     * registerCertificateWithoutCa - Register a certificate that does not have a certificate authority (CA).
    **/
    registerCertificateWithoutCa(req: operations.RegisterCertificateWithoutCaRequest, config?: AxiosRequestConfig): Promise<operations.RegisterCertificateWithoutCaResponse>;
    /**
     * registerThing - <p>Provisions a thing in the device registry. RegisterThing calls other IoT control plane APIs. These calls might exceed your account level <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_iot"> IoT Throttling Limits</a> and cause throttle errors. Please contact <a href="https://console.aws.amazon.com/support/home">Amazon Web Services Customer Support</a> to raise your throttling limits if necessary.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterThing</a> action.</p>
    **/
    registerThing(req: operations.RegisterThingRequest, config?: AxiosRequestConfig): Promise<operations.RegisterThingResponse>;
    /**
     * rejectCertificateTransfer - <p>Rejects a pending certificate transfer. After IoT rejects a certificate transfer, the certificate status changes from <b>PENDING_TRANSFER</b> to <b>INACTIVE</b>.</p> <p>To check for pending certificate transfers, call <a>ListCertificates</a> to enumerate your certificates.</p> <p>This operation can only be called by the transfer destination. After it is called, the certificate will be returned to the source's account in the INACTIVE state.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RejectCertificateTransfer</a> action.</p>
    **/
    rejectCertificateTransfer(req: operations.RejectCertificateTransferRequest, config?: AxiosRequestConfig): Promise<operations.RejectCertificateTransferResponse>;
    /**
     * removeThingFromBillingGroup - <p>Removes the given thing from the billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RemoveThingFromBillingGroup</a> action.</p>
    **/
    removeThingFromBillingGroup(req: operations.RemoveThingFromBillingGroupRequest, config?: AxiosRequestConfig): Promise<operations.RemoveThingFromBillingGroupResponse>;
    /**
     * removeThingFromThingGroup - <p>Remove the specified thing from the specified group.</p> <p>You must specify either a <code>thingGroupArn</code> or a <code>thingGroupName</code> to identify the thing group and either a <code>thingArn</code> or a <code>thingName</code> to identify the thing to remove from the thing group. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RemoveThingFromThingGroup</a> action.</p>
    **/
    removeThingFromThingGroup(req: operations.RemoveThingFromThingGroupRequest, config?: AxiosRequestConfig): Promise<operations.RemoveThingFromThingGroupResponse>;
    /**
     * replaceTopicRule - <p>Replaces the rule. You must specify all parameters for the new rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ReplaceTopicRule</a> action.</p>
    **/
    replaceTopicRule(req: operations.ReplaceTopicRuleRequest, config?: AxiosRequestConfig): Promise<operations.ReplaceTopicRuleResponse>;
    /**
     * searchIndex - <p>The query search index.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SearchIndex</a> action.</p>
    **/
    searchIndex(req: operations.SearchIndexRequest, config?: AxiosRequestConfig): Promise<operations.SearchIndexResponse>;
    /**
     * setDefaultAuthorizer - <p>Sets the default authorizer. This will be used if a websocket connection is made without specifying an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetDefaultAuthorizer</a> action.</p>
    **/
    setDefaultAuthorizer(req: operations.SetDefaultAuthorizerRequest, config?: AxiosRequestConfig): Promise<operations.SetDefaultAuthorizerResponse>;
    /**
     * setDefaultPolicyVersion - <p>Sets the specified version of the specified policy as the policy's default (operative) version. This action affects all certificates to which the policy is attached. To list the principals the policy is attached to, use the <a>ListPrincipalPolicies</a> action.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetDefaultPolicyVersion</a> action.</p>
    **/
    setDefaultPolicyVersion(req: operations.SetDefaultPolicyVersionRequest, config?: AxiosRequestConfig): Promise<operations.SetDefaultPolicyVersionResponse>;
    /**
     * setLoggingOptions - <p>Sets the logging options.</p> <p>NOTE: use of this command is not recommended. Use <code>SetV2LoggingOptions</code> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetLoggingOptions</a> action.</p>
    **/
    setLoggingOptions(req: operations.SetLoggingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.SetLoggingOptionsResponse>;
    /**
     * setV2LoggingLevel - <p>Sets the logging level.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetV2LoggingLevel</a> action.</p>
    **/
    setV2LoggingLevel(req: operations.SetV2LoggingLevelRequest, config?: AxiosRequestConfig): Promise<operations.SetV2LoggingLevelResponse>;
    /**
     * setV2LoggingOptions - <p>Sets the logging options for the V2 logging service.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetV2LoggingOptions</a> action.</p>
    **/
    setV2LoggingOptions(req: operations.SetV2LoggingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.SetV2LoggingOptionsResponse>;
    /**
     * startAuditMitigationActionsTask - <p>Starts a task that applies a set of mitigation actions to the specified target.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartAuditMitigationActionsTask</a> action.</p>
    **/
    startAuditMitigationActionsTask(req: operations.StartAuditMitigationActionsTaskRequest, config?: AxiosRequestConfig): Promise<operations.StartAuditMitigationActionsTaskResponse>;
    /**
     * startDetectMitigationActionsTask - <p> Starts a Device Defender ML Detect mitigation actions task. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartDetectMitigationActionsTask</a> action.</p>
    **/
    startDetectMitigationActionsTask(req: operations.StartDetectMitigationActionsTaskRequest, config?: AxiosRequestConfig): Promise<operations.StartDetectMitigationActionsTaskResponse>;
    /**
     * startOnDemandAuditTask - <p>Starts an on-demand Device Defender audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartOnDemandAuditTask</a> action.</p>
    **/
    startOnDemandAuditTask(req: operations.StartOnDemandAuditTaskRequest, config?: AxiosRequestConfig): Promise<operations.StartOnDemandAuditTaskResponse>;
    /**
     * startThingRegistrationTask - <p>Creates a bulk thing provisioning task.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartThingRegistrationTask</a> action.</p>
    **/
    startThingRegistrationTask(req: operations.StartThingRegistrationTaskRequest, config?: AxiosRequestConfig): Promise<operations.StartThingRegistrationTaskResponse>;
    /**
     * stopThingRegistrationTask - <p>Cancels a bulk thing provisioning task.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StopThingRegistrationTask</a> action.</p>
    **/
    stopThingRegistrationTask(req: operations.StopThingRegistrationTaskRequest, config?: AxiosRequestConfig): Promise<operations.StopThingRegistrationTaskResponse>;
    /**
     * tagResource - <p>Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TagResource</a> action.</p>
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * testAuthorization - <p>Tests if a specified principal is authorized to perform an IoT action on a specified resource. Use this to test and debug the authorization behavior of devices that connect to the IoT device gateway.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TestAuthorization</a> action.</p>
    **/
    testAuthorization(req: operations.TestAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.TestAuthorizationResponse>;
    /**
     * testInvokeAuthorizer - <p>Tests a custom authorization behavior by invoking a specified custom authorizer. Use this to test and debug the custom authorization behavior of devices that connect to the IoT device gateway.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TestInvokeAuthorizer</a> action.</p>
    **/
    testInvokeAuthorizer(req: operations.TestInvokeAuthorizerRequest, config?: AxiosRequestConfig): Promise<operations.TestInvokeAuthorizerResponse>;
    /**
     * transferCertificate - <p>Transfers the specified certificate to the specified Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TransferCertificate</a> action.</p> <p>You can cancel the transfer until it is acknowledged by the recipient.</p> <p>No notification is sent to the transfer destination's account. It is up to the caller to notify the transfer target.</p> <p>The certificate being transferred must not be in the ACTIVE state. You can use the <a>UpdateCertificate</a> action to deactivate it.</p> <p>The certificate must not have any policies attached to it. You can use the <a>DetachPolicy</a> action to detach them.</p>
    **/
    transferCertificate(req: operations.TransferCertificateRequest, config?: AxiosRequestConfig): Promise<operations.TransferCertificateResponse>;
    /**
     * untagResource - <p>Removes the given tags (metadata) from the resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UntagResource</a> action.</p>
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateAccountAuditConfiguration - <p>Configures or reconfigures the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateAccountAuditConfiguration</a> action.</p>
    **/
    updateAccountAuditConfiguration(req: operations.UpdateAccountAuditConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAccountAuditConfigurationResponse>;
    /**
     * updateAuditSuppression -  Updates a Device Defender audit suppression.
    **/
    updateAuditSuppression(req: operations.UpdateAuditSuppressionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAuditSuppressionResponse>;
    /**
     * updateAuthorizer - <p>Updates an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateAuthorizer</a> action.</p>
    **/
    updateAuthorizer(req: operations.UpdateAuthorizerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAuthorizerResponse>;
    /**
     * updateBillingGroup - <p>Updates information about the billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateBillingGroup</a> action.</p>
    **/
    updateBillingGroup(req: operations.UpdateBillingGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBillingGroupResponse>;
    /**
     * updateCaCertificate - <p>Updates a registered CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCACertificate</a> action.</p>
    **/
    updateCaCertificate(req: operations.UpdateCaCertificateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCaCertificateResponse>;
    /**
     * updateCertificate - <p>Updates the status of the specified certificate. This operation is idempotent.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCertificate</a> action.</p> <p>Certificates must be in the ACTIVE state to authenticate devices that use a certificate to connect to IoT.</p> <p>Within a few minutes of updating a certificate from the ACTIVE state to any other state, IoT disconnects all devices that used that certificate to connect. Devices cannot use a certificate that is not in the ACTIVE state to reconnect.</p>
    **/
    updateCertificate(req: operations.UpdateCertificateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCertificateResponse>;
    /**
     * updateCustomMetric - <p>Updates a Device Defender detect custom metric. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCustomMetric</a> action.</p>
    **/
    updateCustomMetric(req: operations.UpdateCustomMetricRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCustomMetricResponse>;
    /**
     * updateDimension - <p>Updates the definition for a dimension. You cannot change the type of a dimension after it is created (you can delete it and recreate it).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDimension</a> action.</p>
    **/
    updateDimension(req: operations.UpdateDimensionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDimensionResponse>;
    /**
     * updateDomainConfiguration - <p>Updates values stored in the domain configuration. Domain configurations for default endpoints can't be updated.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDomainConfiguration</a> action.</p>
    **/
    updateDomainConfiguration(req: operations.UpdateDomainConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDomainConfigurationResponse>;
    /**
     * updateDynamicThingGroup - <p>Updates a dynamic thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDynamicThingGroup</a> action.</p>
    **/
    updateDynamicThingGroup(req: operations.UpdateDynamicThingGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDynamicThingGroupResponse>;
    /**
     * updateEventConfigurations - <p>Updates the event configurations.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateEventConfigurations</a> action.</p>
    **/
    updateEventConfigurations(req: operations.UpdateEventConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEventConfigurationsResponse>;
    /**
     * updateFleetMetric - <p>Updates the data for a fleet metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateFleetMetric</a> action.</p>
    **/
    updateFleetMetric(req: operations.UpdateFleetMetricRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFleetMetricResponse>;
    /**
     * updateIndexingConfiguration - <p>Updates the search configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateIndexingConfiguration</a> action.</p>
    **/
    updateIndexingConfiguration(req: operations.UpdateIndexingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIndexingConfigurationResponse>;
    /**
     * updateJob - <p>Updates supported fields of the specified job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateJob</a> action.</p>
    **/
    updateJob(req: operations.UpdateJobRequest, config?: AxiosRequestConfig): Promise<operations.UpdateJobResponse>;
    /**
     * updateMitigationAction - <p>Updates the definition for the specified mitigation action.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateMitigationAction</a> action.</p>
    **/
    updateMitigationAction(req: operations.UpdateMitigationActionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMitigationActionResponse>;
    /**
     * updateProvisioningTemplate - <p>Updates a fleet provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateProvisioningTemplate</a> action.</p>
    **/
    updateProvisioningTemplate(req: operations.UpdateProvisioningTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProvisioningTemplateResponse>;
    /**
     * updateRoleAlias - <p>Updates a role alias.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateRoleAlias</a> action.</p>
    **/
    updateRoleAlias(req: operations.UpdateRoleAliasRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRoleAliasResponse>;
    /**
     * updateScheduledAudit - <p>Updates a scheduled audit, including which checks are performed and how often the audit takes place.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateScheduledAudit</a> action.</p>
    **/
    updateScheduledAudit(req: operations.UpdateScheduledAuditRequest, config?: AxiosRequestConfig): Promise<operations.UpdateScheduledAuditResponse>;
    /**
     * updateSecurityProfile - <p>Updates a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSecurityProfile</a> action.</p>
    **/
    updateSecurityProfile(req: operations.UpdateSecurityProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSecurityProfileResponse>;
    /**
     * updateStream - <p>Updates an existing stream. The stream version will be incremented by one.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateStream</a> action.</p>
    **/
    updateStream(req: operations.UpdateStreamRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStreamResponse>;
    /**
     * updateThing - <p>Updates the data for a thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThing</a> action.</p>
    **/
    updateThing(req: operations.UpdateThingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateThingResponse>;
    /**
     * updateThingGroup - <p>Update a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingGroup</a> action.</p>
    **/
    updateThingGroup(req: operations.UpdateThingGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateThingGroupResponse>;
    /**
     * updateThingGroupsForThing - <p>Updates the groups to which the thing belongs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingGroupsForThing</a> action.</p>
    **/
    updateThingGroupsForThing(req: operations.UpdateThingGroupsForThingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateThingGroupsForThingResponse>;
    /**
     * updateTopicRuleDestination - <p>Updates a topic rule destination. You use this to change the status, endpoint URL, or confirmation URL of the destination.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateTopicRuleDestination</a> action.</p>
    **/
    updateTopicRuleDestination(req: operations.UpdateTopicRuleDestinationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTopicRuleDestinationResponse>;
    /**
     * validateSecurityProfileBehaviors - <p>Validates a Device Defender security profile behaviors specification.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ValidateSecurityProfileBehaviors</a> action.</p>
    **/
    validateSecurityProfileBehaviors(req: operations.ValidateSecurityProfileBehaviorsRequest, config?: AxiosRequestConfig): Promise<operations.ValidateSecurityProfileBehaviorsResponse>;
}
export {};

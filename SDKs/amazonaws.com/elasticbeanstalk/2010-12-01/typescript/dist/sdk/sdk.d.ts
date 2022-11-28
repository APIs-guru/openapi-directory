import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://elasticbeanstalk.{region}.amazonaws.com", "https://elasticbeanstalk.{region}.amazonaws.com", "http://elasticbeanstalk.{region}.amazonaws.com.cn", "https://elasticbeanstalk.{region}.amazonaws.com.cn"];
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
     * getAbortEnvironmentUpdate - Cancels in-progress environment configuration update or application version deployment.
    **/
    getAbortEnvironmentUpdate(req: operations.GetAbortEnvironmentUpdateRequest, config?: AxiosRequestConfig): Promise<operations.GetAbortEnvironmentUpdateResponse>;
    /**
     * getApplyEnvironmentManagedAction - Applies a scheduled managed action immediately. A managed action can be applied only if its status is <code>Scheduled</code>. Get the status and action ID of a managed action with <a>DescribeEnvironmentManagedActions</a>.
    **/
    getApplyEnvironmentManagedAction(req: operations.GetApplyEnvironmentManagedActionRequest, config?: AxiosRequestConfig): Promise<operations.GetApplyEnvironmentManagedActionResponse>;
    /**
     * getAssociateEnvironmentOperationsRole - Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
    **/
    getAssociateEnvironmentOperationsRole(req: operations.GetAssociateEnvironmentOperationsRoleRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociateEnvironmentOperationsRoleResponse>;
    /**
     * getCheckDnsAvailability - Checks if the specified CNAME is available.
    **/
    getCheckDnsAvailability(req: operations.GetCheckDnsAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.GetCheckDnsAvailabilityResponse>;
    /**
     * getComposeEnvironments - Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a> for details.
    **/
    getComposeEnvironments(req: operations.GetComposeEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetComposeEnvironmentsResponse>;
    /**
     * getCreateStorageLocation - Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.
    **/
    getCreateStorageLocation(req: operations.GetCreateStorageLocationRequest, config?: AxiosRequestConfig): Promise<operations.GetCreateStorageLocationResponse>;
    /**
     * getDeleteApplication - <p>Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.</p> <note> <p>You cannot delete an application that has a running environment.</p> </note>
    **/
    getDeleteApplication(req: operations.GetDeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteApplicationResponse>;
    /**
     * getDeleteApplicationVersion - <p>Deletes the specified version from the specified application.</p> <note> <p>You cannot delete an application version that is associated with a running environment.</p> </note>
    **/
    getDeleteApplicationVersion(req: operations.GetDeleteApplicationVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteApplicationVersionResponse>;
    /**
     * getDeleteConfigurationTemplate - <p>Deletes the specified configuration template.</p> <note> <p>When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.</p> </note>
    **/
    getDeleteConfigurationTemplate(req: operations.GetDeleteConfigurationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteConfigurationTemplateResponse>;
    /**
     * getDeleteEnvironmentConfiguration - <p>Deletes the draft configuration associated with the running environment.</p> <p>Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.</p>
    **/
    getDeleteEnvironmentConfiguration(req: operations.GetDeleteEnvironmentConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteEnvironmentConfigurationResponse>;
    /**
     * getDeletePlatformVersion - Deletes the specified version of a custom platform.
    **/
    getDeletePlatformVersion(req: operations.GetDeletePlatformVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetDeletePlatformVersionResponse>;
    /**
     * getDescribeAccountAttributes - <p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>
    **/
    getDescribeAccountAttributes(req: operations.GetDescribeAccountAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeAccountAttributesResponse>;
    /**
     * getDescribeApplicationVersions - Retrieve a list of application versions.
    **/
    getDescribeApplicationVersions(req: operations.GetDescribeApplicationVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeApplicationVersionsResponse>;
    /**
     * getDescribeApplications - Returns the descriptions of existing applications.
    **/
    getDescribeApplications(req: operations.GetDescribeApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeApplicationsResponse>;
    /**
     * getDescribeConfigurationSettings - <p>Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment.</p> <p>When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy.</p> <p>Related Topics</p> <ul> <li> <p> <a>DeleteEnvironmentConfiguration</a> </p> </li> </ul>
    **/
    getDescribeConfigurationSettings(req: operations.GetDescribeConfigurationSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeConfigurationSettingsResponse>;
    /**
     * getDescribeEnvironmentHealth - Returns information about the overall health of the specified environment. The <b>DescribeEnvironmentHealth</b> operation is only available with AWS Elastic Beanstalk Enhanced Health.
    **/
    getDescribeEnvironmentHealth(req: operations.GetDescribeEnvironmentHealthRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeEnvironmentHealthResponse>;
    /**
     * getDescribeEnvironmentManagedActionHistory - Lists an environment's completed and failed managed actions.
    **/
    getDescribeEnvironmentManagedActionHistory(req: operations.GetDescribeEnvironmentManagedActionHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeEnvironmentManagedActionHistoryResponse>;
    /**
     * getDescribeEnvironmentManagedActions - Lists an environment's upcoming and in-progress managed actions.
    **/
    getDescribeEnvironmentManagedActions(req: operations.GetDescribeEnvironmentManagedActionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeEnvironmentManagedActionsResponse>;
    /**
     * getDescribeEnvironmentResources - Returns AWS resources for this environment.
    **/
    getDescribeEnvironmentResources(req: operations.GetDescribeEnvironmentResourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeEnvironmentResourcesResponse>;
    /**
     * getDescribeEnvironments - Returns descriptions for existing environments.
    **/
    getDescribeEnvironments(req: operations.GetDescribeEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeEnvironmentsResponse>;
    /**
     * getDescribeEvents - <p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p> <note> <p>This action returns the most recent 1,000 events from the specified <code>NextToken</code>.</p> </note>
    **/
    getDescribeEvents(req: operations.GetDescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeEventsResponse>;
    /**
     * getDescribeInstancesHealth - Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health reporting</a>.
    **/
    getDescribeInstancesHealth(req: operations.GetDescribeInstancesHealthRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeInstancesHealthResponse>;
    /**
     * getDescribePlatformVersion - <p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of platform versions.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
    **/
    getDescribePlatformVersion(req: operations.GetDescribePlatformVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribePlatformVersionResponse>;
    /**
     * getDisassociateEnvironmentOperationsRole - Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller's permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
    **/
    getDisassociateEnvironmentOperationsRole(req: operations.GetDisassociateEnvironmentOperationsRoleRequest, config?: AxiosRequestConfig): Promise<operations.GetDisassociateEnvironmentOperationsRoleResponse>;
    /**
     * getListAvailableSolutionStacks - Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.
    **/
    getListAvailableSolutionStacks(req: operations.GetListAvailableSolutionStacksRequest, config?: AxiosRequestConfig): Promise<operations.GetListAvailableSolutionStacksResponse>;
    /**
     * getListTagsForResource - <p>Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p>
    **/
    getListTagsForResource(req: operations.GetListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetListTagsForResourceResponse>;
    /**
     * getRebuildEnvironment - Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.
    **/
    getRebuildEnvironment(req: operations.GetRebuildEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.GetRebuildEnvironmentResponse>;
    /**
     * getRequestEnvironmentInfo - <p>Initiates a request to compile the specified type of information of the deployed environment.</p> <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. </p> <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET containers do not support bundle logs. </p> <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p> <p>Related Topics</p> <ul> <li> <p> <a>RetrieveEnvironmentInfo</a> </p> </li> </ul>
    **/
    getRequestEnvironmentInfo(req: operations.GetRequestEnvironmentInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetRequestEnvironmentInfoResponse>;
    /**
     * getRestartAppServer - Causes the environment to restart the application container server running on each Amazon EC2 instance.
    **/
    getRestartAppServer(req: operations.GetRestartAppServerRequest, config?: AxiosRequestConfig): Promise<operations.GetRestartAppServerResponse>;
    /**
     * getRetrieveEnvironmentInfo - <p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a> request.</p> <p>Related Topics</p> <ul> <li> <p> <a>RequestEnvironmentInfo</a> </p> </li> </ul>
    **/
    getRetrieveEnvironmentInfo(req: operations.GetRetrieveEnvironmentInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetRetrieveEnvironmentInfoResponse>;
    /**
     * getSwapEnvironmentCnamEs - Swaps the CNAMEs of two environments.
    **/
    getSwapEnvironmentCnamEs(req: operations.GetSwapEnvironmentCnamEsRequest, config?: AxiosRequestConfig): Promise<operations.GetSwapEnvironmentCnamEsResponse>;
    /**
     * getTerminateEnvironment - Terminates the specified environment.
    **/
    getTerminateEnvironment(req: operations.GetTerminateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.GetTerminateEnvironmentResponse>;
    /**
     * getUpdateApplication - <p>Updates the specified application to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear these properties, specify an empty string.</p> </note>
    **/
    getUpdateApplication(req: operations.GetUpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetUpdateApplicationResponse>;
    /**
     * getUpdateApplicationVersion - <p>Updates the specified application version to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear properties, specify an empty string.</p> </note>
    **/
    getUpdateApplicationVersion(req: operations.GetUpdateApplicationVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetUpdateApplicationVersionResponse>;
    /**
     * postAbortEnvironmentUpdate - Cancels in-progress environment configuration update or application version deployment.
    **/
    postAbortEnvironmentUpdate(req: operations.PostAbortEnvironmentUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PostAbortEnvironmentUpdateResponse>;
    /**
     * postApplyEnvironmentManagedAction - Applies a scheduled managed action immediately. A managed action can be applied only if its status is <code>Scheduled</code>. Get the status and action ID of a managed action with <a>DescribeEnvironmentManagedActions</a>.
    **/
    postApplyEnvironmentManagedAction(req: operations.PostApplyEnvironmentManagedActionRequest, config?: AxiosRequestConfig): Promise<operations.PostApplyEnvironmentManagedActionResponse>;
    /**
     * postAssociateEnvironmentOperationsRole - Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk uses the associated operations role for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
    **/
    postAssociateEnvironmentOperationsRole(req: operations.PostAssociateEnvironmentOperationsRoleRequest, config?: AxiosRequestConfig): Promise<operations.PostAssociateEnvironmentOperationsRoleResponse>;
    /**
     * postCheckDnsAvailability - Checks if the specified CNAME is available.
    **/
    postCheckDnsAvailability(req: operations.PostCheckDnsAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.PostCheckDnsAvailabilityResponse>;
    /**
     * postComposeEnvironments - Create or update a group of environments that each run a separate component of a single application. Takes a list of version labels that specify application source bundles for each of the environments to create or update. The name of each environment and other required information must be included in the source bundles in an environment manifest named <code>env.yaml</code>. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-mgmt-compose.html">Compose Environments</a> for details.
    **/
    postComposeEnvironments(req: operations.PostComposeEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.PostComposeEnvironmentsResponse>;
    /**
     * postCreateApplication - Creates an application that has one configuration template named <code>default</code> and no application versions.
    **/
    postCreateApplication(req: operations.PostCreateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateApplicationResponse>;
    /**
     * postCreateApplicationVersion - <p>Creates an application version for the specified application. You can create an application version from a source bundle in Amazon S3, a commit in AWS CodeCommit, or the output of an AWS CodeBuild build as follows:</p> <p>Specify a commit in an AWS CodeCommit repository with <code>SourceBuildInformation</code>.</p> <p>Specify a build in an AWS CodeBuild with <code>SourceBuildInformation</code> and <code>BuildConfiguration</code>.</p> <p>Specify a source bundle in S3 with <code>SourceBundle</code> </p> <p>Omit both <code>SourceBuildInformation</code> and <code>SourceBundle</code> to use the default sample application.</p> <note> <p>After you create an application version with a specified Amazon S3 bucket and key location, you can't change that Amazon S3 location. If you change the Amazon S3 location, you receive an exception when you attempt to launch an environment from the application version.</p> </note>
    **/
    postCreateApplicationVersion(req: operations.PostCreateApplicationVersionRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateApplicationVersionResponse>;
    /**
     * postCreateConfigurationTemplate - <p>Creates an AWS Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk application. You define application configuration settings in a configuration template. You can then use the configuration template to deploy different versions of the application with the same configuration settings.</p> <p>Templates aren't associated with any environment. The <code>EnvironmentName</code> response element is always <code>null</code>.</p> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> <li> <p> <a>DescribeConfigurationSettings</a> </p> </li> <li> <p> <a>ListAvailableSolutionStacks</a> </p> </li> </ul>
    **/
    postCreateConfigurationTemplate(req: operations.PostCreateConfigurationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateConfigurationTemplateResponse>;
    /**
     * postCreateEnvironment - Launches an AWS Elastic Beanstalk environment for the specified application using the specified configuration.
    **/
    postCreateEnvironment(req: operations.PostCreateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateEnvironmentResponse>;
    /**
     * postCreatePlatformVersion - Create a new version of your custom platform.
    **/
    postCreatePlatformVersion(req: operations.PostCreatePlatformVersionRequest, config?: AxiosRequestConfig): Promise<operations.PostCreatePlatformVersionResponse>;
    /**
     * postCreateStorageLocation - Creates a bucket in Amazon S3 to store application versions, logs, and other files used by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the first time you create an environment in a region. If the storage location already exists, <code>CreateStorageLocation</code> still returns the bucket name but does not create a new bucket.
    **/
    postCreateStorageLocation(req: operations.PostCreateStorageLocationRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateStorageLocationResponse>;
    /**
     * postDeleteApplication - <p>Deletes the specified application along with all associated versions and configurations. The application versions will not be deleted from your Amazon S3 bucket.</p> <note> <p>You cannot delete an application that has a running environment.</p> </note>
    **/
    postDeleteApplication(req: operations.PostDeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteApplicationResponse>;
    /**
     * postDeleteApplicationVersion - <p>Deletes the specified version from the specified application.</p> <note> <p>You cannot delete an application version that is associated with a running environment.</p> </note>
    **/
    postDeleteApplicationVersion(req: operations.PostDeleteApplicationVersionRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteApplicationVersionResponse>;
    /**
     * postDeleteConfigurationTemplate - <p>Deletes the specified configuration template.</p> <note> <p>When you launch an environment using a configuration template, the environment gets a copy of the template. You can delete or modify the environment's copy of the template without affecting the running environment.</p> </note>
    **/
    postDeleteConfigurationTemplate(req: operations.PostDeleteConfigurationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteConfigurationTemplateResponse>;
    /**
     * postDeleteEnvironmentConfiguration - <p>Deletes the draft configuration associated with the running environment.</p> <p>Updating a running environment with any configuration changes creates a draft configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the deployment is in process or has failed. The draft configuration remains in existence until it is deleted with this action.</p>
    **/
    postDeleteEnvironmentConfiguration(req: operations.PostDeleteEnvironmentConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteEnvironmentConfigurationResponse>;
    /**
     * postDeletePlatformVersion - Deletes the specified version of a custom platform.
    **/
    postDeletePlatformVersion(req: operations.PostDeletePlatformVersionRequest, config?: AxiosRequestConfig): Promise<operations.PostDeletePlatformVersionResponse>;
    /**
     * postDescribeAccountAttributes - <p>Returns attributes related to AWS Elastic Beanstalk that are associated with the calling AWS account.</p> <p>The result currently has one set of attributes—resource quotas.</p>
    **/
    postDescribeAccountAttributes(req: operations.PostDescribeAccountAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeAccountAttributesResponse>;
    /**
     * postDescribeApplicationVersions - Retrieve a list of application versions.
    **/
    postDescribeApplicationVersions(req: operations.PostDescribeApplicationVersionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeApplicationVersionsResponse>;
    /**
     * postDescribeApplications - Returns the descriptions of existing applications.
    **/
    postDescribeApplications(req: operations.PostDescribeApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeApplicationsResponse>;
    /**
     * postDescribeConfigurationOptions - Describes the configuration options that are used in a particular configuration template or environment, or that a specified solution stack defines. The description includes the values the options, their default values, and an indication of the required action on a running environment if an option value is changed.
    **/
    postDescribeConfigurationOptions(req: operations.PostDescribeConfigurationOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeConfigurationOptionsResponse>;
    /**
     * postDescribeConfigurationSettings - <p>Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment.</p> <p>When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy.</p> <p>Related Topics</p> <ul> <li> <p> <a>DeleteEnvironmentConfiguration</a> </p> </li> </ul>
    **/
    postDescribeConfigurationSettings(req: operations.PostDescribeConfigurationSettingsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeConfigurationSettingsResponse>;
    /**
     * postDescribeEnvironmentHealth - Returns information about the overall health of the specified environment. The <b>DescribeEnvironmentHealth</b> operation is only available with AWS Elastic Beanstalk Enhanced Health.
    **/
    postDescribeEnvironmentHealth(req: operations.PostDescribeEnvironmentHealthRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEnvironmentHealthResponse>;
    /**
     * postDescribeEnvironmentManagedActionHistory - Lists an environment's completed and failed managed actions.
    **/
    postDescribeEnvironmentManagedActionHistory(req: operations.PostDescribeEnvironmentManagedActionHistoryRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEnvironmentManagedActionHistoryResponse>;
    /**
     * postDescribeEnvironmentManagedActions - Lists an environment's upcoming and in-progress managed actions.
    **/
    postDescribeEnvironmentManagedActions(req: operations.PostDescribeEnvironmentManagedActionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEnvironmentManagedActionsResponse>;
    /**
     * postDescribeEnvironmentResources - Returns AWS resources for this environment.
    **/
    postDescribeEnvironmentResources(req: operations.PostDescribeEnvironmentResourcesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEnvironmentResourcesResponse>;
    /**
     * postDescribeEnvironments - Returns descriptions for existing environments.
    **/
    postDescribeEnvironments(req: operations.PostDescribeEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEnvironmentsResponse>;
    /**
     * postDescribeEvents - <p>Returns list of event descriptions matching criteria up to the last 6 weeks.</p> <note> <p>This action returns the most recent 1,000 events from the specified <code>NextToken</code>.</p> </note>
    **/
    postDescribeEvents(req: operations.PostDescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEventsResponse>;
    /**
     * postDescribeInstancesHealth - Retrieves detailed information about the health of instances in your AWS Elastic Beanstalk. This operation requires <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced.html">enhanced health reporting</a>.
    **/
    postDescribeInstancesHealth(req: operations.PostDescribeInstancesHealthRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeInstancesHealthResponse>;
    /**
     * postDescribePlatformVersion - <p>Describes a platform version. Provides full details. Compare to <a>ListPlatformVersions</a>, which provides summary information about a list of platform versions.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
    **/
    postDescribePlatformVersion(req: operations.PostDescribePlatformVersionRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribePlatformVersionResponse>;
    /**
     * postDisassociateEnvironmentOperationsRole - Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses the caller's permissions for permissions to downstream services during subsequent calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
    **/
    postDisassociateEnvironmentOperationsRole(req: operations.PostDisassociateEnvironmentOperationsRoleRequest, config?: AxiosRequestConfig): Promise<operations.PostDisassociateEnvironmentOperationsRoleResponse>;
    /**
     * postListAvailableSolutionStacks - Returns a list of the available solution stack names, with the public version first and then in reverse chronological order.
    **/
    postListAvailableSolutionStacks(req: operations.PostListAvailableSolutionStacksRequest, config?: AxiosRequestConfig): Promise<operations.PostListAvailableSolutionStacksResponse>;
    /**
     * postListPlatformBranches - <p>Lists the platform branches available for your account in an AWS Region. Provides summary information about each platform branch.</p> <p>For definitions of platform branch and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
    **/
    postListPlatformBranches(req: operations.PostListPlatformBranchesRequest, config?: AxiosRequestConfig): Promise<operations.PostListPlatformBranchesResponse>;
    /**
     * postListPlatformVersions - <p>Lists the platform versions available for your account in an AWS Region. Provides summary information about each platform version. Compare to <a>DescribePlatformVersion</a>, which provides full details about a single platform version.</p> <p>For definitions of platform version and other platform-related terms, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-glossary.html">AWS Elastic Beanstalk Platforms Glossary</a>.</p>
    **/
    postListPlatformVersions(req: operations.PostListPlatformVersionsRequest, config?: AxiosRequestConfig): Promise<operations.PostListPlatformVersionsResponse>;
    /**
     * postListTagsForResource - <p>Return the tags applied to an AWS Elastic Beanstalk resource. The response contains a list of tag key-value pairs.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p>
    **/
    postListTagsForResource(req: operations.PostListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.PostListTagsForResourceResponse>;
    /**
     * postRebuildEnvironment - Deletes and recreates all of the AWS resources (for example: the Auto Scaling group, load balancer, etc.) for a specified environment and forces a restart.
    **/
    postRebuildEnvironment(req: operations.PostRebuildEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.PostRebuildEnvironmentResponse>;
    /**
     * postRequestEnvironmentInfo - <p>Initiates a request to compile the specified type of information of the deployed environment.</p> <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from the application server log files of every Amazon EC2 instance in your environment. </p> <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET containers do not support bundle logs. </p> <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p> <p>Related Topics</p> <ul> <li> <p> <a>RetrieveEnvironmentInfo</a> </p> </li> </ul>
    **/
    postRequestEnvironmentInfo(req: operations.PostRequestEnvironmentInfoRequest, config?: AxiosRequestConfig): Promise<operations.PostRequestEnvironmentInfoResponse>;
    /**
     * postRestartAppServer - Causes the environment to restart the application container server running on each Amazon EC2 instance.
    **/
    postRestartAppServer(req: operations.PostRestartAppServerRequest, config?: AxiosRequestConfig): Promise<operations.PostRestartAppServerResponse>;
    /**
     * postRetrieveEnvironmentInfo - <p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a> request.</p> <p>Related Topics</p> <ul> <li> <p> <a>RequestEnvironmentInfo</a> </p> </li> </ul>
    **/
    postRetrieveEnvironmentInfo(req: operations.PostRetrieveEnvironmentInfoRequest, config?: AxiosRequestConfig): Promise<operations.PostRetrieveEnvironmentInfoResponse>;
    /**
     * postSwapEnvironmentCnamEs - Swaps the CNAMEs of two environments.
    **/
    postSwapEnvironmentCnamEs(req: operations.PostSwapEnvironmentCnamEsRequest, config?: AxiosRequestConfig): Promise<operations.PostSwapEnvironmentCnamEsResponse>;
    /**
     * postTerminateEnvironment - Terminates the specified environment.
    **/
    postTerminateEnvironment(req: operations.PostTerminateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.PostTerminateEnvironmentResponse>;
    /**
     * postUpdateApplication - <p>Updates the specified application to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear these properties, specify an empty string.</p> </note>
    **/
    postUpdateApplication(req: operations.PostUpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateApplicationResponse>;
    /**
     * postUpdateApplicationResourceLifecycle - Modifies lifecycle settings for an application.
    **/
    postUpdateApplicationResourceLifecycle(req: operations.PostUpdateApplicationResourceLifecycleRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateApplicationResourceLifecycleResponse>;
    /**
     * postUpdateApplicationVersion - <p>Updates the specified application version to have the specified properties.</p> <note> <p>If a property (for example, <code>description</code>) is not provided, the value remains unchanged. To clear properties, specify an empty string.</p> </note>
    **/
    postUpdateApplicationVersion(req: operations.PostUpdateApplicationVersionRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateApplicationVersionResponse>;
    /**
     * postUpdateConfigurationTemplate - <p>Updates the specified configuration template to have the specified properties or configuration option values.</p> <note> <p>If a property (for example, <code>ApplicationName</code>) is not provided, its value remains unchanged. To clear such properties, specify an empty string.</p> </note> <p>Related Topics</p> <ul> <li> <p> <a>DescribeConfigurationOptions</a> </p> </li> </ul>
    **/
    postUpdateConfigurationTemplate(req: operations.PostUpdateConfigurationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateConfigurationTemplateResponse>;
    /**
     * postUpdateEnvironment - <p>Updates the environment description, deploys a new application version, updates the configuration settings to an entirely new configuration template, or updates select configuration option values in the running environment.</p> <p> Attempting to update both the release and configuration is not allowed and AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error. </p> <p> When updating the configuration settings to a new template or individual settings, a draft configuration is created and <a>DescribeConfigurationSettings</a> for this environment returns two setting descriptions with different <code>DeploymentStatus</code> values. </p>
    **/
    postUpdateEnvironment(req: operations.PostUpdateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateEnvironmentResponse>;
    /**
     * postUpdateTagsForResource - <p>Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: <code>TagsToAdd</code> for tags to add or update, and <code>TagsToRemove</code>.</p> <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application Resources</a>.</p> <p>If you create a custom IAM user policy to control permission to this operation, specify one of the following two virtual actions (or both) instead of the API operation name:</p> <dl> <dt>elasticbeanstalk:AddTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tags to add in the <code>TagsToAdd</code> parameter.</p> </dd> <dt>elasticbeanstalk:RemoveTags</dt> <dd> <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tag keys to remove in the <code>TagsToRemove</code> parameter.</p> </dd> </dl> <p>For details about creating a custom user policy, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#AWSHowTo.iam.policies">Creating a Custom User Policy</a>.</p>
    **/
    postUpdateTagsForResource(req: operations.PostUpdateTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateTagsForResourceResponse>;
    /**
     * postValidateConfigurationSettings - <p>Takes a set of configuration settings and either a configuration template or environment, and determines whether those values are valid.</p> <p>This action returns a list of messages indicating any errors or warnings associated with the selection of option values.</p>
    **/
    postValidateConfigurationSettings(req: operations.PostValidateConfigurationSettingsRequest, config?: AxiosRequestConfig): Promise<operations.PostValidateConfigurationSettingsResponse>;
}
export {};

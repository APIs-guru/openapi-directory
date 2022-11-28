import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://codedeploy.{region}.amazonaws.com", "https://codedeploy.{region}.amazonaws.com", "http://codedeploy.{region}.amazonaws.com.cn", "https://codedeploy.{region}.amazonaws.com.cn"];
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
     * addTagsToOnPremisesInstances - Adds tags to on-premises instances.
    **/
    addTagsToOnPremisesInstances(req: operations.AddTagsToOnPremisesInstancesRequest, config?: AxiosRequestConfig): Promise<operations.AddTagsToOnPremisesInstancesResponse>;
    /**
     * batchGetApplicationRevisions - Gets information about one or more application revisions. The maximum number of application revisions that can be returned is 25.
    **/
    batchGetApplicationRevisions(req: operations.BatchGetApplicationRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetApplicationRevisionsResponse>;
    /**
     * batchGetApplications - Gets information about one or more applications. The maximum number of applications that can be returned is 100.
    **/
    batchGetApplications(req: operations.BatchGetApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetApplicationsResponse>;
    /**
     * batchGetDeploymentGroups - Gets information about one or more deployment groups.
    **/
    batchGetDeploymentGroups(req: operations.BatchGetDeploymentGroupsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetDeploymentGroupsResponse>;
    /**
     * batchGetDeploymentInstances - <note> <p> This method works, but is deprecated. Use <code>BatchGetDeploymentTargets</code> instead. </p> </note> <p> Returns an array of one or more instances associated with a deployment. This method works with EC2/On-premises and AWS Lambda compute platforms. The newer <code>BatchGetDeploymentTargets</code> works with all compute platforms. The maximum number of instances that can be returned is 25.</p>
    **/
    batchGetDeploymentInstances(req: operations.BatchGetDeploymentInstancesRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetDeploymentInstancesResponse>;
    /**
     * batchGetDeploymentTargets - <p> Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be returned is 25.</p> <p> The type of targets returned depends on the deployment's compute platform or deployment method: </p> <ul> <li> <p> <b>EC2/On-premises</b>: Information about EC2 instance targets. </p> </li> <li> <p> <b>AWS Lambda</b>: Information about Lambda functions targets. </p> </li> <li> <p> <b>Amazon ECS</b>: Information about Amazon ECS service targets. </p> </li> <li> <p> <b>CloudFormation</b>: Information about targets of blue/green deployments initiated by a CloudFormation stack update.</p> </li> </ul>
    **/
    batchGetDeploymentTargets(req: operations.BatchGetDeploymentTargetsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetDeploymentTargetsResponse>;
    /**
     * batchGetDeployments - Gets information about one or more deployments. The maximum number of deployments that can be returned is 25.
    **/
    batchGetDeployments(req: operations.BatchGetDeploymentsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetDeploymentsResponse>;
    /**
     * batchGetOnPremisesInstances - Gets information about one or more on-premises instances. The maximum number of on-premises instances that can be returned is 25.
    **/
    batchGetOnPremisesInstances(req: operations.BatchGetOnPremisesInstancesRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetOnPremisesInstancesResponse>;
    /**
     * continueDeployment - For a blue/green deployment, starts the process of rerouting traffic from instances in the original environment to instances in the replacement environment without waiting for a specified wait time to elapse. (Traffic rerouting, which is achieved by registering instances in the replacement environment with the load balancer, can start as soon as all instances have a status of Ready.)
    **/
    continueDeployment(req: operations.ContinueDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.ContinueDeploymentResponse>;
    /**
     * createApplication - Creates an application.
    **/
    createApplication(req: operations.CreateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationResponse>;
    /**
     * createDeployment - Deploys an application revision through the specified deployment group.
    **/
    createDeployment(req: operations.CreateDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeploymentResponse>;
    /**
     * createDeploymentConfig -  Creates a deployment configuration.
    **/
    createDeploymentConfig(req: operations.CreateDeploymentConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeploymentConfigResponse>;
    /**
     * createDeploymentGroup - Creates a deployment group to which application revisions are deployed.
    **/
    createDeploymentGroup(req: operations.CreateDeploymentGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeploymentGroupResponse>;
    /**
     * deleteApplication - Deletes an application.
    **/
    deleteApplication(req: operations.DeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationResponse>;
    /**
     * deleteDeploymentConfig - <p>Deletes a deployment configuration.</p> <note> <p>A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted.</p> </note>
    **/
    deleteDeploymentConfig(req: operations.DeleteDeploymentConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeploymentConfigResponse>;
    /**
     * deleteDeploymentGroup - Deletes a deployment group.
    **/
    deleteDeploymentGroup(req: operations.DeleteDeploymentGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeploymentGroupResponse>;
    /**
     * deleteGitHubAccountToken - Deletes a GitHub account connection.
    **/
    deleteGitHubAccountToken(req: operations.DeleteGitHubAccountTokenRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGitHubAccountTokenResponse>;
    /**
     * deleteResourcesByExternalId - Deletes resources linked to an external ID.
    **/
    deleteResourcesByExternalId(req: operations.DeleteResourcesByExternalIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourcesByExternalIdResponse>;
    /**
     * deregisterOnPremisesInstance - Deregisters an on-premises instance.
    **/
    deregisterOnPremisesInstance(req: operations.DeregisterOnPremisesInstanceRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterOnPremisesInstanceResponse>;
    /**
     * getApplication - Gets information about an application.
    **/
    getApplication(req: operations.GetApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationResponse>;
    /**
     * getApplicationRevision - Gets information about an application revision.
    **/
    getApplicationRevision(req: operations.GetApplicationRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationRevisionResponse>;
    /**
     * getDeployment - <p>Gets information about a deployment.</p> <note> <p> The <code>content</code> property of the <code>appSpecContent</code> object in the returned revision is always null. Use <code>GetApplicationRevision</code> and the <code>sha256</code> property of the returned <code>appSpecContent</code> object to get the content of the deployment’s AppSpec file. </p> </note>
    **/
    getDeployment(req: operations.GetDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentResponse>;
    /**
     * getDeploymentConfig - Gets information about a deployment configuration.
    **/
    getDeploymentConfig(req: operations.GetDeploymentConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentConfigResponse>;
    /**
     * getDeploymentGroup - Gets information about a deployment group.
    **/
    getDeploymentGroup(req: operations.GetDeploymentGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentGroupResponse>;
    /**
     * getDeploymentInstance - Gets information about an instance as part of a deployment.
    **/
    getDeploymentInstance(req: operations.GetDeploymentInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentInstanceResponse>;
    /**
     * getDeploymentTarget -  Returns information about a deployment target.
    **/
    getDeploymentTarget(req: operations.GetDeploymentTargetRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentTargetResponse>;
    /**
     * getOnPremisesInstance -  Gets information about an on-premises instance.
    **/
    getOnPremisesInstance(req: operations.GetOnPremisesInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GetOnPremisesInstanceResponse>;
    /**
     * listApplicationRevisions - Lists information about revisions for an application.
    **/
    listApplicationRevisions(req: operations.ListApplicationRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationRevisionsResponse>;
    /**
     * listApplications - Lists the applications registered with the IAM user or AWS account.
    **/
    listApplications(req: operations.ListApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationsResponse>;
    /**
     * listDeploymentConfigs - Lists the deployment configurations with the IAM user or AWS account.
    **/
    listDeploymentConfigs(req: operations.ListDeploymentConfigsRequest, config?: AxiosRequestConfig): Promise<operations.ListDeploymentConfigsResponse>;
    /**
     * listDeploymentGroups - Lists the deployment groups for an application registered with the IAM user or AWS account.
    **/
    listDeploymentGroups(req: operations.ListDeploymentGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListDeploymentGroupsResponse>;
    /**
     * listDeploymentInstances - <note> <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because it works with all compute types. <code>ListDeploymentInstances</code> throws an exception if it is used with a compute platform other than EC2/On-premises or AWS Lambda. </p> </note> <p> Lists the instance for a deployment associated with the IAM user or AWS account. </p>
    **/
    listDeploymentInstances(req: operations.ListDeploymentInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListDeploymentInstancesResponse>;
    /**
     * listDeploymentTargets -  Returns an array of target IDs that are associated a deployment.
    **/
    listDeploymentTargets(req: operations.ListDeploymentTargetsRequest, config?: AxiosRequestConfig): Promise<operations.ListDeploymentTargetsResponse>;
    /**
     * listDeployments - Lists the deployments in a deployment group for an application registered with the IAM user or AWS account.
    **/
    listDeployments(req: operations.ListDeploymentsRequest, config?: AxiosRequestConfig): Promise<operations.ListDeploymentsResponse>;
    /**
     * listGitHubAccountTokenNames - Lists the names of stored connections to GitHub accounts.
    **/
    listGitHubAccountTokenNames(req: operations.ListGitHubAccountTokenNamesRequest, config?: AxiosRequestConfig): Promise<operations.ListGitHubAccountTokenNamesResponse>;
    /**
     * listOnPremisesInstances - <p>Gets a list of names for one or more on-premises instances.</p> <p>Unless otherwise specified, both registered and deregistered on-premises instance names are listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.</p>
    **/
    listOnPremisesInstances(req: operations.ListOnPremisesInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListOnPremisesInstancesResponse>;
    /**
     * listTagsForResource -  Returns a list of tags for the resource identified by a specified Amazon Resource Name (ARN). Tags are used to organize and categorize your CodeDeploy resources.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * putLifecycleEventHookExecutionStatus -  Sets the result of a Lambda validation function. The function validates lifecycle hooks during a deployment that uses the AWS Lambda or Amazon ECS compute platform. For AWS Lambda deployments, the available lifecycle hooks are <code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>. For Amazon ECS deployments, the available lifecycle hooks are <code>BeforeInstall</code>, <code>AfterInstall</code>, <code>AfterAllowTestTraffic</code>, <code>BeforeAllowTraffic</code>, and <code>AfterAllowTraffic</code>. Lambda validation functions return <code>Succeeded</code> or <code>Failed</code>. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda">AppSpec 'hooks' Section for an AWS Lambda Deployment </a> and <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-ecs">AppSpec 'hooks' Section for an Amazon ECS Deployment</a>.
    **/
    putLifecycleEventHookExecutionStatus(req: operations.PutLifecycleEventHookExecutionStatusRequest, config?: AxiosRequestConfig): Promise<operations.PutLifecycleEventHookExecutionStatusResponse>;
    /**
     * registerApplicationRevision - Registers with AWS CodeDeploy a revision for the specified application.
    **/
    registerApplicationRevision(req: operations.RegisterApplicationRevisionRequest, config?: AxiosRequestConfig): Promise<operations.RegisterApplicationRevisionResponse>;
    /**
     * registerOnPremisesInstance - <p>Registers an on-premises instance.</p> <note> <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.</p> </note>
    **/
    registerOnPremisesInstance(req: operations.RegisterOnPremisesInstanceRequest, config?: AxiosRequestConfig): Promise<operations.RegisterOnPremisesInstanceResponse>;
    /**
     * removeTagsFromOnPremisesInstances - Removes one or more tags from one or more on-premises instances.
    **/
    removeTagsFromOnPremisesInstances(req: operations.RemoveTagsFromOnPremisesInstancesRequest, config?: AxiosRequestConfig): Promise<operations.RemoveTagsFromOnPremisesInstancesResponse>;
    /**
     * skipWaitTimeForInstanceTermination - In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete.
    **/
    skipWaitTimeForInstanceTermination(req: operations.SkipWaitTimeForInstanceTerminationRequest, config?: AxiosRequestConfig): Promise<operations.SkipWaitTimeForInstanceTerminationResponse>;
    /**
     * stopDeployment - Attempts to stop an ongoing deployment.
    **/
    stopDeployment(req: operations.StopDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.StopDeploymentResponse>;
    /**
     * tagResource -  Associates the list of tags in the input <code>Tags</code> parameter with the resource identified by the <code>ResourceArn</code> input parameter.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource -  Disassociates a resource from a list of tags. The resource is identified by the <code>ResourceArn</code> input parameter. The tags are identified by the list of keys in the <code>TagKeys</code> input parameter.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateApplication - Changes the name of an application.
    **/
    updateApplication(req: operations.UpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationResponse>;
    /**
     * updateDeploymentGroup - Changes information about a deployment group.
    **/
    updateDeploymentGroup(req: operations.UpdateDeploymentGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeploymentGroupResponse>;
}
export {};

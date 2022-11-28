import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://apprunner.{region}.amazonaws.com", "https://apprunner.{region}.amazonaws.com", "http://apprunner.{region}.amazonaws.com.cn", "https://apprunner.{region}.amazonaws.com.cn"];
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
     * associateCustomDomain - <p>Associate your own domain name with the AWS App Runner subdomain URL of your App Runner service.</p> <p>After you call <code>AssociateCustomDomain</code> and receive a successful response, use the information in the <a>CustomDomain</a> record that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks domain validity in a certificate stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>.</p>
    **/
    associateCustomDomain(req: operations.AssociateCustomDomainRequest, config?: AxiosRequestConfig): Promise<operations.AssociateCustomDomainResponse>;
    /**
     * createAutoScalingConfiguration - <p>Create an AWS App Runner automatic scaling configuration resource. App Runner requires this resource when you create App Runner services that require non-default auto scaling settings. You can share an auto scaling configuration across multiple services.</p> <p>Create multiple revisions of a configuration by using the same <code>AutoScalingConfigurationName</code> and different <code>AutoScalingConfigurationRevision</code> values. When you create a service, you can set it to use the latest active revision of an auto scaling configuration or a specific revision.</p> <p>Configure a higher <code>MinSize</code> to increase the spread of your App Runner service over more Availability Zones in the AWS Region. The tradeoff is a higher minimal cost.</p> <p>Configure a lower <code>MaxSize</code> to control your cost. The tradeoff is lower responsiveness during peak demand.</p>
    **/
    createAutoScalingConfiguration(req: operations.CreateAutoScalingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateAutoScalingConfigurationResponse>;
    /**
     * createConnection - <p>Create an AWS App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from certain third-party providers. You can share a connection across multiple services.</p> <p>A connection resource is needed to access GitHub repositories. GitHub requires a user interface approval process through the App Runner console before you can use the connection.</p>
    **/
    createConnection(req: operations.CreateConnectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateConnectionResponse>;
    /**
     * createService - <p>Create an AWS App Runner service. After the service is created, the action also automatically starts a deployment.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html">ListOperations</a> call to track the operation's progress.</p>
    **/
    createService(req: operations.CreateServiceRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceResponse>;
    /**
     * deleteAutoScalingConfiguration - Delete an AWS App Runner automatic scaling configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.
    **/
    deleteAutoScalingConfiguration(req: operations.DeleteAutoScalingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAutoScalingConfigurationResponse>;
    /**
     * deleteConnection - Delete an AWS App Runner connection. You must first ensure that there are no running App Runner services that use this connection. If there are any, the <code>DeleteConnection</code> action fails.
    **/
    deleteConnection(req: operations.DeleteConnectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionResponse>;
    /**
     * deleteService - <p>Delete an AWS App Runner service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
    **/
    deleteService(req: operations.DeleteServiceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceResponse>;
    /**
     * describeAutoScalingConfiguration - Return a full description of an AWS App Runner automatic scaling configuration resource.
    **/
    describeAutoScalingConfiguration(req: operations.DescribeAutoScalingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAutoScalingConfigurationResponse>;
    /**
     * describeCustomDomains - Return a description of custom domain names that are associated with an AWS App Runner service.
    **/
    describeCustomDomains(req: operations.DescribeCustomDomainsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCustomDomainsResponse>;
    /**
     * describeService - Return a full description of an AWS App Runner service.
    **/
    describeService(req: operations.DescribeServiceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeServiceResponse>;
    /**
     * disassociateCustomDomain - <p>Disassociate a custom domain name from an AWS App Runner service.</p> <p>Certificates tracking domain validity are associated with a custom domain and are stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>. These certificates aren't deleted as part of this action. App Runner delays certificate deletion for 30 days after a domain is disassociated from your service.</p>
    **/
    disassociateCustomDomain(req: operations.DisassociateCustomDomainRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateCustomDomainResponse>;
    /**
     * listAutoScalingConfigurations - Returns a list of AWS App Runner automatic scaling configurations in your AWS account. You can query the revisions for a specific configuration name or the revisions for all configurations in your account. You can optionally query only the latest revision of each requested name.
    **/
    listAutoScalingConfigurations(req: operations.ListAutoScalingConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.ListAutoScalingConfigurationsResponse>;
    /**
     * listConnections - Returns a list of AWS App Runner connections that are associated with your AWS account.
    **/
    listConnections(req: operations.ListConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.ListConnectionsResponse>;
    /**
     * listOperations - <p>Return a list of operations that occurred on an AWS App Runner service.</p> <p>The resulting list of <a>OperationSummary</a> objects is sorted in reverse chronological order. The first object on the list represents the last started operation.</p>
    **/
    listOperations(req: operations.ListOperationsRequest, config?: AxiosRequestConfig): Promise<operations.ListOperationsResponse>;
    /**
     * listServices - Returns a list of running AWS App Runner services in your AWS account.
    **/
    listServices(req: operations.ListServicesRequest, config?: AxiosRequestConfig): Promise<operations.ListServicesResponse>;
    /**
     * listTagsForResource - List tags that are associated with for an AWS App Runner resource. The response contains a list of tag key-value pairs.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * pauseService - <p>Pause an active AWS App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is removed).</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
    **/
    pauseService(req: operations.PauseServiceRequest, config?: AxiosRequestConfig): Promise<operations.PauseServiceResponse>;
    /**
     * resumeService - <p>Resume an active AWS App Runner service. App Runner provisions compute capacity for the service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
    **/
    resumeService(req: operations.ResumeServiceRequest, config?: AxiosRequestConfig): Promise<operations.ResumeServiceResponse>;
    /**
     * startDeployment - <p>Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an AWS App Runner service.</p> <p>For a source code repository, App Runner retrieves the commit and builds a Docker image. For a source image repository, App Runner retrieves the latest Docker image. In both cases, App Runner then deploys the new image to your service and starts a new container instance.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
    **/
    startDeployment(req: operations.StartDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.StartDeploymentResponse>;
    /**
     * tagResource - Add tags to, or update the tag values of, an App Runner resource. A tag is a key-value pair.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Remove tags from an App Runner resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateService - <p>Update an AWS App Runner service. You can update the source configuration and instance configuration of the service. You can also update the ARN of the auto scaling configuration resource that's associated with the service. However, you can't change the name or the encryption configuration of the service. These can be set only when you create the service.</p> <p>To update the tags applied to your service, use the separate actions <a>TagResource</a> and <a>UntagResource</a>.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>
    **/
    updateService(req: operations.UpdateServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceResponse>;
}
export {};

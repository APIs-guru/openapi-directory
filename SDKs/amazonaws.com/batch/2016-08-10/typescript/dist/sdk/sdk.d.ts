import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://batch.{region}.amazonaws.com", "https://batch.{region}.amazonaws.com", "http://batch.{region}.amazonaws.com.cn", "https://batch.{region}.amazonaws.com.cn"];
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
     * cancelJob - Cancels a job in an Batch job queue. Jobs that are in the <code>SUBMITTED</code>, <code>PENDING</code>, or <code>RUNNABLE</code> state are canceled. Jobs that have progressed to <code>STARTING</code> or <code>RUNNING</code> aren't canceled, but the API operation still succeeds, even if no job is canceled. These jobs must be terminated with the <a>TerminateJob</a> operation.
    **/
    cancelJob(req: operations.CancelJobRequest, config?: AxiosRequestConfig): Promise<operations.CancelJobResponse>;
    /**
     * createComputeEnvironment - <p>Creates an Batch compute environment. You can create <code>MANAGED</code> or <code>UNMANAGED</code> compute environments. <code>MANAGED</code> compute environments can use Amazon EC2 or Fargate resources. <code>UNMANAGED</code> compute environments can only use EC2 resources.</p> <p>In a managed compute environment, Batch manages the capacity and instance types of the compute resources within the environment. This is based on the compute resource specification that you define or the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a> that you specify when you create the compute environment. Either, you can choose to use EC2 On-Demand Instances and EC2 Spot Instances. Or, you can use Fargate and Fargate Spot capacity in your managed compute environment. You can optionally set a maximum price so that Spot Instances only launch when the Spot Instance price is less than a specified percentage of the On-Demand price.</p> <note> <p>Multi-node parallel jobs aren't supported on Spot Instances.</p> </note> <p>In an unmanaged compute environment, you can manage your own EC2 compute resources and have a lot of flexibility with how you configure your compute resources. For example, you can use custom AMIs. However, you must verify that each of your AMIs meet the Amazon ECS container instance AMI specification. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container_instance_AMIs.html">container instance AMIs</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. After you created your unmanaged compute environment, you can use the <a>DescribeComputeEnvironments</a> operation to find the Amazon ECS cluster that's associated with it. Then, launch your container instances into that Amazon ECS cluster. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html">Launching an Amazon ECS container instance</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>Batch doesn't upgrade the AMIs in a compute environment after the environment is created. For example, it doesn't update the AMIs when a newer version of the Amazon ECS optimized AMI is available. Therefore, you're responsible for managing the guest operating system (including its updates and security patches) and any additional application software or utilities that you install on the compute resources. To use a new AMI for your Batch jobs, complete these steps:</p> <ol> <li> <p>Create a new compute environment with the new AMI.</p> </li> <li> <p>Add the compute environment to an existing job queue.</p> </li> <li> <p>Remove the earlier compute environment from your job queue.</p> </li> <li> <p>Delete the earlier compute environment.</p> </li> </ol> </note>
    **/
    createComputeEnvironment(req: operations.CreateComputeEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateComputeEnvironmentResponse>;
    /**
     * createJobQueue - <p>Creates an Batch job queue. When you create a job queue, you associate one or more compute environments to the queue and assign an order of preference for the compute environments.</p> <p>You also set a priority to the job queue that determines the order that the Batch scheduler places jobs onto its associated compute environments. For example, if a compute environment is associated with more than one job queue, the job queue with a higher priority is given preference for scheduling jobs to that compute environment.</p>
    **/
    createJobQueue(req: operations.CreateJobQueueRequest, config?: AxiosRequestConfig): Promise<operations.CreateJobQueueResponse>;
    /**
     * deleteComputeEnvironment - <p>Deletes an Batch compute environment.</p> <p>Before you can delete a compute environment, you must set its state to <code>DISABLED</code> with the <a>UpdateComputeEnvironment</a> API operation and disassociate it from any job queues with the <a>UpdateJobQueue</a> API operation. Compute environments that use Fargate resources must terminate all active jobs on that compute environment before deleting the compute environment. If this isn't done, the compute environment enters an invalid state.</p>
    **/
    deleteComputeEnvironment(req: operations.DeleteComputeEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteComputeEnvironmentResponse>;
    /**
     * deleteJobQueue - <p>Deletes the specified job queue. You must first disable submissions for a queue with the <a>UpdateJobQueue</a> operation. All jobs in the queue are eventually terminated when you delete a job queue. The jobs are terminated at a rate of about 16 jobs each second.</p> <p>It's not necessary to disassociate compute environments from a queue before submitting a <code>DeleteJobQueue</code> request.</p>
    **/
    deleteJobQueue(req: operations.DeleteJobQueueRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJobQueueResponse>;
    /**
     * deregisterJobDefinition - Deregisters an Batch job definition. Job definitions are permanently deleted after 180 days.
    **/
    deregisterJobDefinition(req: operations.DeregisterJobDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterJobDefinitionResponse>;
    /**
     * describeComputeEnvironments - <p>Describes one or more of your compute environments.</p> <p>If you're using an unmanaged compute environment, you can use the <code>DescribeComputeEnvironment</code> operation to determine the <code>ecsClusterArn</code> that you should launch your Amazon ECS container instances into.</p>
    **/
    describeComputeEnvironments(req: operations.DescribeComputeEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeComputeEnvironmentsResponse>;
    /**
     * describeJobDefinitions - Describes a list of job definitions. You can specify a <code>status</code> (such as <code>ACTIVE</code>) to only return job definitions that match that status.
    **/
    describeJobDefinitions(req: operations.DescribeJobDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeJobDefinitionsResponse>;
    /**
     * describeJobQueues - Describes one or more of your job queues.
    **/
    describeJobQueues(req: operations.DescribeJobQueuesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeJobQueuesResponse>;
    /**
     * describeJobs - Describes a list of Batch jobs.
    **/
    describeJobs(req: operations.DescribeJobsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeJobsResponse>;
    /**
     * listJobs - <p>Returns a list of Batch jobs.</p> <p>You must specify only one of the following items:</p> <ul> <li> <p>A job queue ID to return a list of jobs in that job queue</p> </li> <li> <p>A multi-node parallel job ID to return a list of nodes for that job</p> </li> <li> <p>An array job ID to return a list of the children for that job</p> </li> </ul> <p>You can filter the results by job status with the <code>jobStatus</code> parameter. If you don't specify a status, only <code>RUNNING</code> jobs are returned.</p>
    **/
    listJobs(req: operations.ListJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListJobsResponse>;
    /**
     * listTagsForResource - Lists the tags for an Batch resource. Batch resources that support tags are compute environments, jobs, job definitions, and job queues. ARNs for child jobs of array and multi-node parallel (MNP) jobs are not supported.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * registerJobDefinition - Registers an Batch job definition.
    **/
    registerJobDefinition(req: operations.RegisterJobDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.RegisterJobDefinitionResponse>;
    /**
     * submitJob - <p>Submits an Batch job from a job definition. Parameters that are specified during <a>SubmitJob</a> override parameters defined in the job definition. vCPU and memory requirements that are specified in the <code>ResourceRequirements</code> objects in the job definition are the exception. They can't be overridden this way using the <code>memory</code> and <code>vcpus</code> parameters. Rather, you must specify updates to job definition parameters in a <code>ResourceRequirements</code> object that's included in the <code>containerOverrides</code> parameter.</p> <important> <p>Jobs that run on Fargate resources can't be guaranteed to run for more than 14 days. This is because, after 14 days, Fargate resources might become unavailable and job might be terminated.</p> </important>
    **/
    submitJob(req: operations.SubmitJobRequest, config?: AxiosRequestConfig): Promise<operations.SubmitJobResponse>;
    /**
     * tagResource - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags that are associated with that resource are deleted as well. Batch resources that support tags are compute environments, jobs, job definitions, and job queues. ARNs for child jobs of array and multi-node parallel (MNP) jobs are not supported.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * terminateJob - Terminates a job in a job queue. Jobs that are in the <code>STARTING</code> or <code>RUNNING</code> state are terminated, which causes them to transition to <code>FAILED</code>. Jobs that have not progressed to the <code>STARTING</code> state are cancelled.
    **/
    terminateJob(req: operations.TerminateJobRequest, config?: AxiosRequestConfig): Promise<operations.TerminateJobResponse>;
    /**
     * untagResource - Deletes specified tags from an Batch resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateComputeEnvironment - Updates an Batch compute environment.
    **/
    updateComputeEnvironment(req: operations.UpdateComputeEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateComputeEnvironmentResponse>;
    /**
     * updateJobQueue - Updates a job queue.
    **/
    updateJobQueue(req: operations.UpdateJobQueueRequest, config?: AxiosRequestConfig): Promise<operations.UpdateJobQueueResponse>;
}
export {};

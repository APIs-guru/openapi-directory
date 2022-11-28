import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://emr-containers.{region}.amazonaws.com", "https://emr-containers.{region}.amazonaws.com", "http://emr-containers.{region}.amazonaws.com.cn", "https://emr-containers.{region}.amazonaws.com.cn"];
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
     * cancelJobRun - Cancels a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
    **/
    cancelJobRun(req: operations.CancelJobRunRequest, config?: AxiosRequestConfig): Promise<operations.CancelJobRunResponse>;
    /**
     * createManagedEndpoint - Creates a managed endpoint. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.
    **/
    createManagedEndpoint(req: operations.CreateManagedEndpointRequest, config?: AxiosRequestConfig): Promise<operations.CreateManagedEndpointResponse>;
    /**
     * createVirtualCluster - Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
    **/
    createVirtualCluster(req: operations.CreateVirtualClusterRequest, config?: AxiosRequestConfig): Promise<operations.CreateVirtualClusterResponse>;
    /**
     * deleteManagedEndpoint - Deletes a managed endpoint. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.
    **/
    deleteManagedEndpoint(req: operations.DeleteManagedEndpointRequest, config?: AxiosRequestConfig): Promise<operations.DeleteManagedEndpointResponse>;
    /**
     * deleteVirtualCluster - Deletes a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
    **/
    deleteVirtualCluster(req: operations.DeleteVirtualClusterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVirtualClusterResponse>;
    /**
     * describeJobRun - Displays detailed information about a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
    **/
    describeJobRun(req: operations.DescribeJobRunRequest, config?: AxiosRequestConfig): Promise<operations.DescribeJobRunResponse>;
    /**
     * describeManagedEndpoint - Displays detailed information about a managed endpoint. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.
    **/
    describeManagedEndpoint(req: operations.DescribeManagedEndpointRequest, config?: AxiosRequestConfig): Promise<operations.DescribeManagedEndpointResponse>;
    /**
     * describeVirtualCluster - Displays detailed information about a specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
    **/
    describeVirtualCluster(req: operations.DescribeVirtualClusterRequest, config?: AxiosRequestConfig): Promise<operations.DescribeVirtualClusterResponse>;
    /**
     * listJobRuns - Lists job runs based on a set of parameters. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
    **/
    listJobRuns(req: operations.ListJobRunsRequest, config?: AxiosRequestConfig): Promise<operations.ListJobRunsResponse>;
    /**
     * listManagedEndpoints - Lists managed endpoints based on a set of parameters. A managed endpoint is a gateway that connects EMR Studio to Amazon EMR on EKS so that EMR Studio can communicate with your virtual cluster.
    **/
    listManagedEndpoints(req: operations.ListManagedEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.ListManagedEndpointsResponse>;
    /**
     * listTagsForResource - Lists the tags assigned to the resources.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * listVirtualClusters - Lists information about the specified virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any additional resource in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
    **/
    listVirtualClusters(req: operations.ListVirtualClustersRequest, config?: AxiosRequestConfig): Promise<operations.ListVirtualClustersResponse>;
    /**
     * startJobRun - Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.
    **/
    startJobRun(req: operations.StartJobRunRequest, config?: AxiosRequestConfig): Promise<operations.StartJobRunResponse>;
    /**
     * tagResource - Assigns tags to resources. A tag is a label that you assign to an AWS resource. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize your AWS resources by attributes such as purpose, owner, or environment. When you have many resources of the same type, you can quickly identify a specific resource based on the tags you've assigned to it. For example, you can define a set of tags for your Amazon EMR on EKS clusters to help you track each cluster's owner and stack level. We recommend that you devise a consistent set of tag keys for each resource type. You can then search and filter the resources based on the tags that you add.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes tags from resources.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
export {};

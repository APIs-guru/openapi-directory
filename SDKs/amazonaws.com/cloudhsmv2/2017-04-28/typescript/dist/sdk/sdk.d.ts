import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://cloudhsmv2.{region}.amazonaws.com", "https://cloudhsmv2.{region}.amazonaws.com", "http://cloudhsmv2.{region}.amazonaws.com.cn", "https://cloudhsmv2.{region}.amazonaws.com.cn"];
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
     * copyBackupToRegion - Copy an AWS CloudHSM cluster backup to a different region.
    **/
    copyBackupToRegion(req: operations.CopyBackupToRegionRequest, config?: AxiosRequestConfig): Promise<operations.CopyBackupToRegionResponse>;
    /**
     * createCluster - Creates a new AWS CloudHSM cluster.
    **/
    createCluster(req: operations.CreateClusterRequest, config?: AxiosRequestConfig): Promise<operations.CreateClusterResponse>;
    /**
     * createHsm - Creates a new hardware security module (HSM) in the specified AWS CloudHSM cluster.
    **/
    createHsm(req: operations.CreateHsmRequest, config?: AxiosRequestConfig): Promise<operations.CreateHsmResponse>;
    /**
     * deleteBackup - Deletes a specified AWS CloudHSM backup. A backup can be restored up to 7 days after the DeleteBackup request is made. For more information on restoring a backup, see <a>RestoreBackup</a>.
    **/
    deleteBackup(req: operations.DeleteBackupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBackupResponse>;
    /**
     * deleteCluster - Deletes the specified AWS CloudHSM cluster. Before you can delete a cluster, you must delete all HSMs in the cluster. To see if the cluster contains any HSMs, use <a>DescribeClusters</a>. To delete an HSM, use <a>DeleteHsm</a>.
    **/
    deleteCluster(req: operations.DeleteClusterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteClusterResponse>;
    /**
     * deleteHsm - Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to specify only one of these values. To find these values, use <a>DescribeClusters</a>.
    **/
    deleteHsm(req: operations.DeleteHsmRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHsmResponse>;
    /**
     * describeBackups - <p>Gets information about backups of AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the backups. When the response contains only a subset of backups, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeBackups</code> request to get more backups. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more backups to get.</p>
    **/
    describeBackups(req: operations.DescribeBackupsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBackupsResponse>;
    /**
     * describeClusters - <p>Gets information about AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the clusters. When the response contains only a subset of clusters, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeClusters</code> request to get more clusters. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more clusters to get.</p>
    **/
    describeClusters(req: operations.DescribeClustersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeClustersResponse>;
    /**
     * initializeCluster - Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your issuing certificate authority (CA) and the CA's root certificate. Before you can claim a cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA. To get the cluster's CSR, use <a>DescribeClusters</a>.
    **/
    initializeCluster(req: operations.InitializeClusterRequest, config?: AxiosRequestConfig): Promise<operations.InitializeClusterResponse>;
    /**
     * listTags - <p>Gets a list of tags for the specified AWS CloudHSM cluster.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>ListTags</code> request to get more tags. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more tags to get.</p>
    **/
    listTags(req: operations.ListTagsRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsResponse>;
    /**
     * modifyBackupAttributes - Modifies attributes for AWS CloudHSM backup.
    **/
    modifyBackupAttributes(req: operations.ModifyBackupAttributesRequest, config?: AxiosRequestConfig): Promise<operations.ModifyBackupAttributesResponse>;
    /**
     * modifyCluster - Modifies AWS CloudHSM cluster.
    **/
    modifyCluster(req: operations.ModifyClusterRequest, config?: AxiosRequestConfig): Promise<operations.ModifyClusterResponse>;
    /**
     * restoreBackup - Restores a specified AWS CloudHSM backup that is in the <code>PENDING_DELETION</code> state. For mor information on deleting a backup, see <a>DeleteBackup</a>.
    **/
    restoreBackup(req: operations.RestoreBackupRequest, config?: AxiosRequestConfig): Promise<operations.RestoreBackupResponse>;
    /**
     * tagResource - Adds or overwrites one or more tags for the specified AWS CloudHSM cluster.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes the specified tag or tags from the specified AWS CloudHSM cluster.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
export {};

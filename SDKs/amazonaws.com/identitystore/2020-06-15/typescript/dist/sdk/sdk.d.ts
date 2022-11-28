import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://identitystore.{region}.amazonaws.com", "https://identitystore.{region}.amazonaws.com", "http://identitystore.{region}.amazonaws.com.cn", "https://identitystore.{region}.amazonaws.com.cn"];
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
     * describeGroup - Retrieves the group metadata and attributes from <code>GroupId</code> in an identity store.
    **/
    describeGroup(req: operations.DescribeGroupRequest, config?: AxiosRequestConfig): Promise<operations.DescribeGroupResponse>;
    /**
     * describeUser - Retrieves the user metadata and attributes from <code>UserId</code> in an identity store.
    **/
    describeUser(req: operations.DescribeUserRequest, config?: AxiosRequestConfig): Promise<operations.DescribeUserResponse>;
    /**
     * listGroups - Lists the attribute name and value of the group that you specified in the search. We only support <code>DisplayName</code> as a valid filter attribute path currently, and filter is required. This API returns minimum attributes, including <code>GroupId</code> and group <code>DisplayName</code> in the response.
    **/
    listGroups(req: operations.ListGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListGroupsResponse>;
    /**
     * listUsers - Lists the attribute name and value of the user that you specified in the search. We only support <code>UserName</code> as a valid filter attribute path currently, and filter is required. This API returns minimum attributes, including <code>UserId</code> and <code>UserName</code> in the response.
    **/
    listUsers(req: operations.ListUsersRequest, config?: AxiosRequestConfig): Promise<operations.ListUsersResponse>;
}
export {};

import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://api.tunneling.iot.{region}.amazonaws.com", "https://api.tunneling.iot.{region}.amazonaws.com", "http://api.tunneling.iot.{region}.amazonaws.com.cn", "https://api.tunneling.iot.{region}.amazonaws.com.cn"];
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
     * closeTunnel - Closes a tunnel identified by the unique tunnel id. When a <code>CloseTunnel</code> request is received, we close the WebSocket connections between the client and proxy server so no data can be transmitted.
    **/
    closeTunnel(req: operations.CloseTunnelRequest, config?: AxiosRequestConfig): Promise<operations.CloseTunnelResponse>;
    /**
     * describeTunnel - Gets information about a tunnel identified by the unique tunnel id.
    **/
    describeTunnel(req: operations.DescribeTunnelRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTunnelResponse>;
    /**
     * listTagsForResource - Lists the tags for the specified resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * listTunnels - List all tunnels for an AWS account. Tunnels are listed by creation time in descending order, newer tunnels will be listed before older tunnels.
    **/
    listTunnels(req: operations.ListTunnelsRequest, config?: AxiosRequestConfig): Promise<operations.ListTunnelsResponse>;
    /**
     * openTunnel - Creates a new tunnel, and returns two client access tokens for clients to use to connect to the AWS IoT Secure Tunneling proxy server.
    **/
    openTunnel(req: operations.OpenTunnelRequest, config?: AxiosRequestConfig): Promise<operations.OpenTunnelResponse>;
    /**
     * tagResource - A resource tag.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes a tag from a resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
export {};

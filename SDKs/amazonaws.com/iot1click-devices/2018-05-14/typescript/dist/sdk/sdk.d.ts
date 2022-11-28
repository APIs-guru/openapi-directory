import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://devices.iot1click.{region}.amazonaws.com", "https://devices.iot1click.{region}.amazonaws.com", "http://devices.iot1click.{region}.amazonaws.com.cn", "https://devices.iot1click.{region}.amazonaws.com.cn"];
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
     * claimDevicesByClaimCode - Adds device(s) to your account (i.e., claim one or more devices) if and only if you
     *  received a claim code with the device(s).
    **/
    claimDevicesByClaimCode(req: operations.ClaimDevicesByClaimCodeRequest, config?: AxiosRequestConfig): Promise<operations.ClaimDevicesByClaimCodeResponse>;
    /**
     * describeDevice - Given a device ID, returns a DescribeDeviceResponse object describing the
     *  details of the device.
    **/
    describeDevice(req: operations.DescribeDeviceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDeviceResponse>;
    /**
     * finalizeDeviceClaim - <p>Given a device ID, finalizes the claim request for the associated device.</p><note>
     *  <p>Claiming a device consists of initiating a claim, then publishing a device event,
     *  and finalizing the claim. For a device of type button, a device event can
     *  be published by simply clicking the device.</p>
     *  </note>
    **/
    finalizeDeviceClaim(req: operations.FinalizeDeviceClaimRequest, config?: AxiosRequestConfig): Promise<operations.FinalizeDeviceClaimResponse>;
    /**
     * getDeviceMethods - Given a device ID, returns the invokable methods associated with the device.
    **/
    getDeviceMethods(req: operations.GetDeviceMethodsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceMethodsResponse>;
    /**
     * initiateDeviceClaim - <p>Given a device ID, initiates a claim request for the associated device.</p><note>
     *  <p>Claiming a device consists of initiating a claim, then publishing a device event,
     *  and finalizing the claim. For a device of type button, a device event can
     *  be published by simply clicking the device.</p>
     *  </note>
    **/
    initiateDeviceClaim(req: operations.InitiateDeviceClaimRequest, config?: AxiosRequestConfig): Promise<operations.InitiateDeviceClaimResponse>;
    /**
     * invokeDeviceMethod - Given a device ID, issues a request to invoke a named device method (with possible
     *  parameters). See the "Example POST" code snippet below.
    **/
    invokeDeviceMethod(req: operations.InvokeDeviceMethodRequest, config?: AxiosRequestConfig): Promise<operations.InvokeDeviceMethodResponse>;
    /**
     * listDeviceEvents - Using a device ID, returns a DeviceEventsResponse object containing an
     *  array of events for the device.
    **/
    listDeviceEvents(req: operations.ListDeviceEventsRequest, config?: AxiosRequestConfig): Promise<operations.ListDeviceEventsResponse>;
    /**
     * listDevices - Lists the 1-Click compatible devices associated with your AWS account.
    **/
    listDevices(req: operations.ListDevicesRequest, config?: AxiosRequestConfig): Promise<operations.ListDevicesResponse>;
    /**
     * listTagsForResource - Lists the tags associated with the specified resource ARN.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * tagResource - Adds or updates the tags associated with the resource ARN. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per
     *  resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * unclaimDevice - Disassociates a device from your AWS account using its device ID.
    **/
    unclaimDevice(req: operations.UnclaimDeviceRequest, config?: AxiosRequestConfig): Promise<operations.UnclaimDeviceResponse>;
    /**
     * untagResource - Using tag keys, deletes the tags (key/value pairs) associated with the specified
     *  resource ARN.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateDeviceState - Using a Boolean value (true or false), this operation
     *  enables or disables the device given a device ID.
    **/
    updateDeviceState(req: operations.UpdateDeviceStateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceStateResponse>;
}
export {};

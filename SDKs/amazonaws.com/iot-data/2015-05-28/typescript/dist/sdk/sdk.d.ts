import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://data.iot.{region}.amazonaws.com", "https://data.iot.{region}.amazonaws.com", "http://data.iot.{region}.amazonaws.com.cn", "https://data.iot.{region}.amazonaws.com.cn"];
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
     * deleteThingShadow - <p>Deletes the shadow for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingShadow</a> action.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_DeleteThingShadow.html">DeleteThingShadow</a> in the IoT Developer Guide.</p>
    **/
    deleteThingShadow(req: operations.DeleteThingShadowRequest, config?: AxiosRequestConfig): Promise<operations.DeleteThingShadowResponse>;
    /**
     * getRetainedMessage - <p>Gets the details of a single retained message for the specified topic.</p> <p>This action returns the message payload of the retained message, which can incur messaging costs. To list only the topic names of the retained messages, call <a href="/iot/latest/developerguide/API_iotdata_ListRetainedMessages.html">ListRetainedMessages</a>.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html#awsiotfleethubfordevicemanagement-actions-as-permissions">GetRetainedMessage</a> action.</p> <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">IoT Core pricing - Messaging</a>.</p>
    **/
    getRetainedMessage(req: operations.GetRetainedMessageRequest, config?: AxiosRequestConfig): Promise<operations.GetRetainedMessageResponse>;
    /**
     * getThingShadow - <p>Gets the shadow for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetThingShadow</a> action.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_GetThingShadow.html">GetThingShadow</a> in the IoT Developer Guide.</p>
    **/
    getThingShadow(req: operations.GetThingShadowRequest, config?: AxiosRequestConfig): Promise<operations.GetThingShadowResponse>;
    /**
     * listNamedShadowsForThing - <p>Lists the shadows for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListNamedShadowsForThing</a> action.</p>
    **/
    listNamedShadowsForThing(req: operations.ListNamedShadowsForThingRequest, config?: AxiosRequestConfig): Promise<operations.ListNamedShadowsForThingResponse>;
    /**
     * listRetainedMessages - <p>Lists summary information about the retained messages stored for the account.</p> <p>This action returns only the topic names of the retained messages. It doesn't return any message payloads. Although this action doesn't return a message payload, it can still incur messaging costs.</p> <p>To get the message payload of a retained message, call <a href="https://docs.aws.amazon.com/iot/latest/developerguide/API_iotdata_GetRetainedMessage.html">GetRetainedMessage</a> with the topic name of the retained message.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html#awsiotfleethubfordevicemanagement-actions-as-permissions">ListRetainedMessages</a> action.</p> <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">IoT Core pricing - Messaging</a>.</p>
    **/
    listRetainedMessages(req: operations.ListRetainedMessagesRequest, config?: AxiosRequestConfig): Promise<operations.ListRetainedMessagesResponse>;
    /**
     * publish - <p>Publishes an MQTT message.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">Publish</a> action.</p> <p>For more information about MQTT messages, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html">MQTT Protocol</a> in the IoT Developer Guide.</p> <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">IoT Core pricing - Messaging</a>.</p>
    **/
    publish(req: operations.PublishRequest, config?: AxiosRequestConfig): Promise<operations.PublishResponse>;
    /**
     * updateThingShadow - <p>Updates the shadow for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingShadow</a> action.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_UpdateThingShadow.html">UpdateThingShadow</a> in the IoT Developer Guide.</p>
    **/
    updateThingShadow(req: operations.UpdateThingShadowRequest, config?: AxiosRequestConfig): Promise<operations.UpdateThingShadowResponse>;
}
export {};

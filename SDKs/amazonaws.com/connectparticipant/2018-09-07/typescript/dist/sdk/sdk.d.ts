import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://participant.connect.{region}.amazonaws.com", "https://participant.connect.{region}.amazonaws.com", "http://participant.connect.{region}.amazonaws.com.cn", "https://participant.connect.{region}.amazonaws.com.cn"];
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
     * completeAttachmentUpload - Allows you to confirm that the attachment has been uploaded using the pre-signed URL provided in StartAttachmentUpload API.
    **/
    completeAttachmentUpload(req: operations.CompleteAttachmentUploadRequest, config?: AxiosRequestConfig): Promise<operations.CompleteAttachmentUploadResponse>;
    /**
     * createParticipantConnection - <p>Creates the participant's connection. Note that ParticipantToken is used for invoking this API instead of ConnectionToken.</p> <p>The participant token is valid for the lifetime of the participant – until they are part of a contact.</p> <p>The response URL for <code>WEBSOCKET</code> Type has a connect expiry timeout of 100s. Clients must manually connect to the returned websocket URL and subscribe to the desired topic. </p> <p>For chat, you need to publish the following on the established websocket connection:</p> <p> <code>{"topic":"aws/subscribe","content":{"topics":["aws/chat"]}}</code> </p> <p>Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter, clients need to call this API again to obtain a new websocket URL and perform the same steps as before.</p> <note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p> </note>
    **/
    createParticipantConnection(req: operations.CreateParticipantConnectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateParticipantConnectionResponse>;
    /**
     * disconnectParticipant - <p>Disconnects a participant. Note that ConnectionToken is used for invoking this API instead of ParticipantToken.</p> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
    **/
    disconnectParticipant(req: operations.DisconnectParticipantRequest, config?: AxiosRequestConfig): Promise<operations.DisconnectParticipantResponse>;
    /**
     * getAttachment - Provides a pre-signed URL for download of a completed attachment. This is an asynchronous API for use with active contacts.
    **/
    getAttachment(req: operations.GetAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.GetAttachmentResponse>;
    /**
     * getTranscript - <p>Retrieves a transcript of the session, including details about any attachments. Note that ConnectionToken is used for invoking this API instead of ParticipantToken.</p> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
    **/
    getTranscript(req: operations.GetTranscriptRequest, config?: AxiosRequestConfig): Promise<operations.GetTranscriptResponse>;
    /**
     * sendEvent - <p>Sends an event. Note that ConnectionToken is used for invoking this API instead of ParticipantToken.</p> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
    **/
    sendEvent(req: operations.SendEventRequest, config?: AxiosRequestConfig): Promise<operations.SendEventResponse>;
    /**
     * sendMessage - <p>Sends a message. Note that ConnectionToken is used for invoking this API instead of ParticipantToken.</p> <note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p> </note>
    **/
    sendMessage(req: operations.SendMessageRequest, config?: AxiosRequestConfig): Promise<operations.SendMessageResponse>;
    /**
     * startAttachmentUpload - Provides a pre-signed Amazon S3 URL in response for uploading the file directly to S3.
    **/
    startAttachmentUpload(req: operations.StartAttachmentUploadRequest, config?: AxiosRequestConfig): Promise<operations.StartAttachmentUploadResponse>;
}
export {};

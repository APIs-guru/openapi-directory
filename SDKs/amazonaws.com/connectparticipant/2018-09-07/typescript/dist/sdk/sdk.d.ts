import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    CompleteAttachmentUpload(req: operations.CompleteAttachmentUploadRequest, config?: AxiosRequestConfig): Promise<operations.CompleteAttachmentUploadResponse>;
    CreateParticipantConnection(req: operations.CreateParticipantConnectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateParticipantConnectionResponse>;
    DisconnectParticipant(req: operations.DisconnectParticipantRequest, config?: AxiosRequestConfig): Promise<operations.DisconnectParticipantResponse>;
    GetAttachment(req: operations.GetAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.GetAttachmentResponse>;
    GetTranscript(req: operations.GetTranscriptRequest, config?: AxiosRequestConfig): Promise<operations.GetTranscriptResponse>;
    SendEvent(req: operations.SendEventRequest, config?: AxiosRequestConfig): Promise<operations.SendEventResponse>;
    SendMessage(req: operations.SendMessageRequest, config?: AxiosRequestConfig): Promise<operations.SendMessageResponse>;
    StartAttachmentUpload(req: operations.StartAttachmentUploadRequest, config?: AxiosRequestConfig): Promise<operations.StartAttachmentUploadResponse>;
}
export {};

import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionCredentials } from "./connectioncredentials";
import { Websocket } from "./websocket";
export declare class CreateParticipantConnectionResponse extends SpeakeasyBase {
    connectionCredentials?: ConnectionCredentials;
    websocket?: Websocket;
}

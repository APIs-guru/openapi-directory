import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionCredentials } from "./connectioncredentials";
import { Websocket } from "./websocket";


export class CreateParticipantConnectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionCredentials" })
  connectionCredentials?: ConnectionCredentials;

  @Metadata({ data: "json, name=Websocket" })
  websocket?: Websocket;
}

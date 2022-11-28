import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionCredentials } from "./connectioncredentials";
import { Websocket } from "./websocket";



export class CreateParticipantConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionCredentials" })
  connectionCredentials?: ConnectionCredentials;

  @SpeakeasyMetadata({ data: "json, name=Websocket" })
  websocket?: Websocket;
}

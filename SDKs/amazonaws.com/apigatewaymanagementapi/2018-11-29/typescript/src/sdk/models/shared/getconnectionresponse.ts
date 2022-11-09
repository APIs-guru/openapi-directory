import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Identity } from "./identity";


export class GetConnectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectedAt" })
  connectedAt?: Date;

  @Metadata({ data: "json, name=Identity" })
  identity?: Identity;

  @Metadata({ data: "json, name=LastActiveAt" })
  lastActiveAt?: Date;
}

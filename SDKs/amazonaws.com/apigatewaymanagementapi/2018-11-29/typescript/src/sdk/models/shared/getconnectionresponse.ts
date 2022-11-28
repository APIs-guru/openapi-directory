import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Identity } from "./identity";



export class GetConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectedAt" })
  connectedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Identity" })
  identity?: Identity;

  @SpeakeasyMetadata({ data: "json, name=LastActiveAt" })
  lastActiveAt?: Date;
}

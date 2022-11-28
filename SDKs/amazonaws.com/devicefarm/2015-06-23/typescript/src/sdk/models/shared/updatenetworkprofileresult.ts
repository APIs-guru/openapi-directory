import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkProfile } from "./networkprofile";



export class UpdateNetworkProfileResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=networkProfile" })
  networkProfile?: NetworkProfile;
}

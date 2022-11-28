import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkProfile } from "./networkprofile";



export class GetNetworkProfileResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=networkProfile" })
  networkProfile?: NetworkProfile;
}

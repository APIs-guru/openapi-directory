import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NetworkProfile } from "./networkprofile";


export class UpdateNetworkProfileResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=networkProfile" })
  networkProfile?: NetworkProfile;
}

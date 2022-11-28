import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceProfile } from "./instanceprofile";



export class CreateInstanceProfileResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceProfile" })
  instanceProfile?: InstanceProfile;
}

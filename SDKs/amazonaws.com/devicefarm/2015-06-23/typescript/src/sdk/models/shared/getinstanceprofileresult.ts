import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceProfile } from "./instanceprofile";



export class GetInstanceProfileResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceProfile" })
  instanceProfile?: InstanceProfile;
}

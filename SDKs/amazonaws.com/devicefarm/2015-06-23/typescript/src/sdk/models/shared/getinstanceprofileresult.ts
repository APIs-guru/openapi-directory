import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceProfile } from "./instanceprofile";


export class GetInstanceProfileResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceProfile" })
  instanceProfile?: InstanceProfile;
}

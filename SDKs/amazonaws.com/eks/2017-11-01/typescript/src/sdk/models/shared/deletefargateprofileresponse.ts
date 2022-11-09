import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FargateProfile } from "./fargateprofile";


export class DeleteFargateProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=fargateProfile" })
  fargateProfile?: FargateProfile;
}

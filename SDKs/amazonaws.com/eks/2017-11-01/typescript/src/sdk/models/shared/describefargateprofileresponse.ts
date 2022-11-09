import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FargateProfile } from "./fargateprofile";


export class DescribeFargateProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=fargateProfile" })
  fargateProfile?: FargateProfile;
}

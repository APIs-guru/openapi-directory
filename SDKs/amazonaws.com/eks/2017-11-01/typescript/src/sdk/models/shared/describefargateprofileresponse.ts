import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FargateProfile } from "./fargateprofile";



export class DescribeFargateProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fargateProfile" })
  fargateProfile?: FargateProfile;
}

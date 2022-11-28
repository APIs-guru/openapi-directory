import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProfileId" })
  profileId: string;
}

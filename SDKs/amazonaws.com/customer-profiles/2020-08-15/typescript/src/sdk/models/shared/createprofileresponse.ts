import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProfileId" })
  profileId: string;
}

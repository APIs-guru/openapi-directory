import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProfileId" })
  profileId: string;
}

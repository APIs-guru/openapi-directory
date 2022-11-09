import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProfileId" })
  profileId: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}

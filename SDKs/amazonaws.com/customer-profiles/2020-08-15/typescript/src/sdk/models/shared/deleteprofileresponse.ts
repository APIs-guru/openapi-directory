import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}

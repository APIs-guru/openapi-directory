import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProfileKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}

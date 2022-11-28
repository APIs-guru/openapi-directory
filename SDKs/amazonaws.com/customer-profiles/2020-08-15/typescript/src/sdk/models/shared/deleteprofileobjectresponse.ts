import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProfileObjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}

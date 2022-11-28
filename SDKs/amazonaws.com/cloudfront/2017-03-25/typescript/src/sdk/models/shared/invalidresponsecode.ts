import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvalidResponseCode extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}

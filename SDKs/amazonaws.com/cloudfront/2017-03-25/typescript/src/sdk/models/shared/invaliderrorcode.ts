import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvalidErrorCode extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}

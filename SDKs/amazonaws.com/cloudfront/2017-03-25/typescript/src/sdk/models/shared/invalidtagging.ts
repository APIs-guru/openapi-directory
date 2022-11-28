import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvalidTagging extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}

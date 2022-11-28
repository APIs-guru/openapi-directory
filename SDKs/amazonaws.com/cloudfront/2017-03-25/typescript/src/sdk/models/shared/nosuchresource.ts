import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NoSuchResource extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}

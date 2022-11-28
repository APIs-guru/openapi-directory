import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfirmProductInstanceResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  return?: boolean;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateFpgaImageResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fpgaImageGlobalId?: string;

  @SpeakeasyMetadata()
  fpgaImageId?: string;
}

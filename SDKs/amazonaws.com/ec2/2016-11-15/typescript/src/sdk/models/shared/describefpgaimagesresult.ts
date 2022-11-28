import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FpgaImage } from "./fpgaimage";



export class DescribeFpgaImagesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FpgaImage })
  fpgaImages?: FpgaImage[];

  @SpeakeasyMetadata()
  nextToken?: string;
}

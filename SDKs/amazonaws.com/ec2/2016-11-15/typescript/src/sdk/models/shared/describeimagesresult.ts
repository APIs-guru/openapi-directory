import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";



export class DescribeImagesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Image })
  images?: Image[];
}

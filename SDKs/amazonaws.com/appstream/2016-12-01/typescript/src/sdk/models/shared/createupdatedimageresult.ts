import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";



export class CreateUpdatedImageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canUpdateImage" })
  canUpdateImage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Image;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Image } from "./image";


export class CreateUpdatedImageResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=canUpdateImage" })
  canUpdateImage?: boolean;

  @Metadata({ data: "json, name=image" })
  image?: Image;
}

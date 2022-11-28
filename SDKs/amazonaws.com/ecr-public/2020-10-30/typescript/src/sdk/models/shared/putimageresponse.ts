import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";



export class PutImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Image;
}

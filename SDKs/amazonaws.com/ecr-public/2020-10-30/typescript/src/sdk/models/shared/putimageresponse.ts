import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Image } from "./image";


export class PutImageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: Image;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";



export class GetImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Image;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}

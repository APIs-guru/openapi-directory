import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Image } from "./image";


export class GetImageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: Image;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}

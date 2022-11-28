import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageFailure } from "./imagefailure";
import { Image } from "./image";



export class BatchGetImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failures", elemType: ImageFailure })
  failures?: ImageFailure[];

  @SpeakeasyMetadata({ data: "json, name=images", elemType: Image })
  images?: Image[];
}

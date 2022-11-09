import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageFailure } from "./imagefailure";
import { Image } from "./image";


export class BatchGetImageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=failures", elemType: shared.ImageFailure })
  failures?: ImageFailure[];

  @Metadata({ data: "json, name=images", elemType: shared.Image })
  images?: Image[];
}

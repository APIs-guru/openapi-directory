import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageFailure } from "./imagefailure";
import { ImageIdentifier } from "./imageidentifier";



export class BatchDeleteImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failures", elemType: ImageFailure })
  failures?: ImageFailure[];

  @SpeakeasyMetadata({ data: "json, name=imageIds", elemType: ImageIdentifier })
  imageIds?: ImageIdentifier[];
}

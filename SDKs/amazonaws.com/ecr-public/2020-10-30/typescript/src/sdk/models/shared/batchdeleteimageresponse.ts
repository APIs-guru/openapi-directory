import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageFailure } from "./imagefailure";
import { ImageIdentifier } from "./imageidentifier";


export class BatchDeleteImageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=failures", elemType: shared.ImageFailure })
  failures?: ImageFailure[];

  @Metadata({ data: "json, name=imageIds", elemType: shared.ImageIdentifier })
  imageIds?: ImageIdentifier[];
}

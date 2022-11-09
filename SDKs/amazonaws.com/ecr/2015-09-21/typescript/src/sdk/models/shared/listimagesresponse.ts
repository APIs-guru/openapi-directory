import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageIdentifier } from "./imageidentifier";


export class ListImagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageIds", elemType: shared.ImageIdentifier })
  imageIds?: ImageIdentifier[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

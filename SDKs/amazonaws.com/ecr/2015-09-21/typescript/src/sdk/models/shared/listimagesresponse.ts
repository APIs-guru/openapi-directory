import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageIdentifier } from "./imageidentifier";



export class ListImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageIds", elemType: ImageIdentifier })
  imageIds?: ImageIdentifier[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

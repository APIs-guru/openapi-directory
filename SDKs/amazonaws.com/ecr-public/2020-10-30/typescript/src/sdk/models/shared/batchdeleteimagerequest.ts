import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageIdentifier } from "./imageidentifier";



export class BatchDeleteImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageIds", elemType: ImageIdentifier })
  imageIds: ImageIdentifier[];

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}

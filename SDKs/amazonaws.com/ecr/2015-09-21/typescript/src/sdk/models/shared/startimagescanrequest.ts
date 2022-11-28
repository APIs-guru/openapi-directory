import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageIdentifier } from "./imageidentifier";



export class StartImageScanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageId" })
  imageId: ImageIdentifier;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}

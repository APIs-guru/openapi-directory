import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageIdentifier } from "./imageidentifier";
import { ImageScanStatus } from "./imagescanstatus";



export class StartImageScanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageId" })
  imageId?: ImageIdentifier;

  @SpeakeasyMetadata({ data: "json, name=imageScanStatus" })
  imageScanStatus?: ImageScanStatus;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}

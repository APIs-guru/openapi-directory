import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageIdentifier } from "./imageidentifier";
import { ImageScanStatus } from "./imagescanstatus";


export class StartImageScanResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageId" })
  imageId?: ImageIdentifier;

  @Metadata({ data: "json, name=imageScanStatus" })
  imageScanStatus?: ImageScanStatus;

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}

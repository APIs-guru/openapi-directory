import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageScanningConfiguration } from "./imagescanningconfiguration";



export class PutImageScanningConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageScanningConfiguration" })
  imageScanningConfiguration: ImageScanningConfiguration;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}

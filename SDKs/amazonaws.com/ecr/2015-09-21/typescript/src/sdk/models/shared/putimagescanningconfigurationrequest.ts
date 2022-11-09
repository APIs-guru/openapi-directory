import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageScanningConfiguration } from "./imagescanningconfiguration";


export class PutImageScanningConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageScanningConfiguration" })
  imageScanningConfiguration: ImageScanningConfiguration;

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName: string;
}

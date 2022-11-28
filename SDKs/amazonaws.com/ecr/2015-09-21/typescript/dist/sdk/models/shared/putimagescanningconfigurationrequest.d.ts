import { SpeakeasyBase } from "../../../internal/utils";
import { ImageScanningConfiguration } from "./imagescanningconfiguration";
export declare class PutImageScanningConfigurationRequest extends SpeakeasyBase {
    imageScanningConfiguration: ImageScanningConfiguration;
    registryId?: string;
    repositoryName: string;
}

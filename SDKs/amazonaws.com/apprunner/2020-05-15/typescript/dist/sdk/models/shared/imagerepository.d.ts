import { SpeakeasyBase } from "../../../internal/utils";
import { ImageConfiguration } from "./imageconfiguration";
import { ImageRepositoryTypeEnum } from "./imagerepositorytypeenum";
/**
 * Describes a source image repository.
**/
export declare class ImageRepository extends SpeakeasyBase {
    imageConfiguration?: ImageConfiguration;
    imageIdentifier: string;
    imageRepositoryType: ImageRepositoryTypeEnum;
}

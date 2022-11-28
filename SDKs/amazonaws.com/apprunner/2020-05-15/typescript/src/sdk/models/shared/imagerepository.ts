import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageConfiguration } from "./imageconfiguration";
import { ImageRepositoryTypeEnum } from "./imagerepositorytypeenum";



// ImageRepository
/** 
 * Describes a source image repository.
**/
export class ImageRepository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageConfiguration" })
  imageConfiguration?: ImageConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ImageIdentifier" })
  imageIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=ImageRepositoryType" })
  imageRepositoryType: ImageRepositoryTypeEnum;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageConfiguration } from "./imageconfiguration";
import { ImageRepositoryTypeEnum } from "./imagerepositorytypeenum";


// ImageRepository
/** 
 * Describes a source image repository.
**/
export class ImageRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageConfiguration" })
  imageConfiguration?: ImageConfiguration;

  @Metadata({ data: "json, name=ImageIdentifier" })
  imageIdentifier: string;

  @Metadata({ data: "json, name=ImageRepositoryType" })
  imageRepositoryType: ImageRepositoryTypeEnum;
}

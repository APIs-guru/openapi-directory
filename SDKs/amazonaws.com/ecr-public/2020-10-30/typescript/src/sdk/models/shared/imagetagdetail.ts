import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReferencedImageDetail } from "./referencedimagedetail";



// ImageTagDetail
/** 
 * An object representing the image tag details for an image.
**/
export class ImageTagDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=imageDetail" })
  imageDetail?: ReferencedImageDetail;

  @SpeakeasyMetadata({ data: "json, name=imageTag" })
  imageTag?: string;
}

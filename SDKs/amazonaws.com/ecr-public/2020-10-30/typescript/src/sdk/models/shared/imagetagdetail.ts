import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReferencedImageDetail } from "./referencedimagedetail";


// ImageTagDetail
/** 
 * An object representing the image tag details for an image.
**/
export class ImageTagDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=imageDetail" })
  imageDetail?: ReferencedImageDetail;

  @Metadata({ data: "json, name=imageTag" })
  imageTag?: string;
}

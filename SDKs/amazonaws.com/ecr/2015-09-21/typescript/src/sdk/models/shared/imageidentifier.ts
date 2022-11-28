import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageIdentifier
/** 
 * An object with identifying information for an Amazon ECR image.
**/
export class ImageIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageDigest" })
  imageDigest?: string;

  @SpeakeasyMetadata({ data: "json, name=imageTag" })
  imageTag?: string;
}

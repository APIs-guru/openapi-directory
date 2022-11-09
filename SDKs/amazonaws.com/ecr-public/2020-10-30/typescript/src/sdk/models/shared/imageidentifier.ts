import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImageIdentifier
/** 
 * An object with identifying information for an Amazon ECR image.
**/
export class ImageIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageDigest" })
  imageDigest?: string;

  @Metadata({ data: "json, name=imageTag" })
  imageTag?: string;
}

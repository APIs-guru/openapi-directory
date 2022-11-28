import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Paths
/** 
 * A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>. 
**/
export class Paths extends SpeakeasyBase {
  @SpeakeasyMetadata()
  items?: string[];

  @SpeakeasyMetadata()
  quantity: number;
}

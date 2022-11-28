import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Origin
/** 
 * A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.
**/
export class S3Origin extends SpeakeasyBase {
  @SpeakeasyMetadata()
  domainName: string;

  @SpeakeasyMetadata()
  originAccessIdentity: string;
}

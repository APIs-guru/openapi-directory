import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3OriginConfig
/** 
 * A complex type that contains information about the Amazon S3 origin. If the origin is a custom origin, use the <code>CustomOriginConfig</code> element instead.
**/
export class S3OriginConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  originAccessIdentity: string;
}

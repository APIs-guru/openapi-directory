import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryStringCacheKeys
/** 
 * A complex type that contains information about the query string parameters that you want CloudFront to use for caching for a cache behavior. 
**/
export class QueryStringCacheKeys extends SpeakeasyBase {
  @SpeakeasyMetadata()
  items?: string[];

  @SpeakeasyMetadata()
  quantity: number;
}

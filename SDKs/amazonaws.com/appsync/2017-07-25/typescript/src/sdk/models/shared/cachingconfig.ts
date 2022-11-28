import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CachingConfig
/** 
 * The caching configuration for a resolver that has caching enabled.
**/
export class CachingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cachingKeys" })
  cachingKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;
}

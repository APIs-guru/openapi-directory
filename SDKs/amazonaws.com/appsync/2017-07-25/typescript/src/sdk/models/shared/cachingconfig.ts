import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CachingConfig
/** 
 * The caching configuration for a resolver that has caching enabled.
**/
export class CachingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=cachingKeys" })
  cachingKeys?: string[];

  @Metadata({ data: "json, name=ttl" })
  ttl?: number;
}

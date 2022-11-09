import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiCachingBehaviorEnum } from "./apicachingbehaviorenum";
import { ApiCacheStatusEnum } from "./apicachestatusenum";
import { ApiCacheTypeEnum } from "./apicachetypeenum";


// ApiCache
/** 
 * The <code>ApiCache</code> object.
**/
export class ApiCache extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiCachingBehavior" })
  apiCachingBehavior?: ApiCachingBehaviorEnum;

  @Metadata({ data: "json, name=atRestEncryptionEnabled" })
  atRestEncryptionEnabled?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: ApiCacheStatusEnum;

  @Metadata({ data: "json, name=transitEncryptionEnabled" })
  transitEncryptionEnabled?: boolean;

  @Metadata({ data: "json, name=ttl" })
  ttl?: number;

  @Metadata({ data: "json, name=type" })
  type?: ApiCacheTypeEnum;
}

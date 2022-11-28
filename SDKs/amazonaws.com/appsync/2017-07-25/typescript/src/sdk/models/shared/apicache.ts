import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCachingBehaviorEnum } from "./apicachingbehaviorenum";
import { ApiCacheStatusEnum } from "./apicachestatusenum";
import { ApiCacheTypeEnum } from "./apicachetypeenum";



// ApiCache
/** 
 * The <code>ApiCache</code> object.
**/
export class ApiCache extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiCachingBehavior" })
  apiCachingBehavior?: ApiCachingBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=atRestEncryptionEnabled" })
  atRestEncryptionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ApiCacheStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=transitEncryptionEnabled" })
  transitEncryptionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ApiCacheTypeEnum;
}

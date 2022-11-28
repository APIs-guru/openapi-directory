import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheNodeTypeSpecificValue } from "./cachenodetypespecificvalue";
import { ChangeTypeEnum } from "./changetypeenum";



// CacheNodeTypeSpecificParameter
/** 
 * A parameter that has a different value for each cache node type it is applied to. For example, in a Redis cluster, a <code>cache.m1.large</code> cache node type would have a larger <code>maxmemory</code> value than a <code>cache.m1.small</code> type.
**/
export class CacheNodeTypeSpecificParameter extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowedValues?: string;

  @SpeakeasyMetadata({ elemType: CacheNodeTypeSpecificValue })
  cacheNodeTypeSpecificValues?: CacheNodeTypeSpecificValue[];

  @SpeakeasyMetadata()
  changeType?: ChangeTypeEnum;

  @SpeakeasyMetadata()
  dataType?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  isModifiable?: boolean;

  @SpeakeasyMetadata()
  minimumEngineVersion?: string;

  @SpeakeasyMetadata()
  parameterName?: string;

  @SpeakeasyMetadata()
  source?: string;
}

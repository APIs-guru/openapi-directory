import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheNodeTypeSpecificParameter } from "./cachenodetypespecificparameter";
import { Parameter } from "./parameter";



// CacheParameterGroupDetails
/** 
 * Represents the output of a <code>DescribeCacheParameters</code> operation.
**/
export class CacheParameterGroupDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CacheNodeTypeSpecificParameter })
  cacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParameter[];

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: Parameter })
  parameters?: Parameter[];
}

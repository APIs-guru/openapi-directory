import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheNodeTypeSpecificParameter } from "./cachenodetypespecificparameter";
import { Parameter } from "./parameter";



// EngineDefaults
/** 
 * Represents the output of a <code>DescribeEngineDefaultParameters</code> operation.
**/
export class EngineDefaults extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CacheNodeTypeSpecificParameter })
  cacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParameter[];

  @SpeakeasyMetadata()
  cacheParameterGroupFamily?: string;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: Parameter })
  parameters?: Parameter[];
}

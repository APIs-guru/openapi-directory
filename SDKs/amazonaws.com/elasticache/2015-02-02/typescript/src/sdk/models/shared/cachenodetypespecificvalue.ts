import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CacheNodeTypeSpecificValue
/** 
 * A value that applies only to a certain cache node type.
**/
export class CacheNodeTypeSpecificValue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheNodeType?: string;

  @SpeakeasyMetadata()
  value?: string;
}

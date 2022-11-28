import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WarmPoolStateEnum } from "./warmpoolstateenum";
import { WarmPoolStatusEnum } from "./warmpoolstatusenum";



// WarmPoolConfiguration
/** 
 * Describes a warm pool configuration. 
**/
export class WarmPoolConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  maxGroupPreparedCapacity?: number;

  @SpeakeasyMetadata()
  minSize?: number;

  @SpeakeasyMetadata()
  poolState?: WarmPoolStateEnum;

  @SpeakeasyMetadata()
  status?: WarmPoolStatusEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { WarmPoolStateEnum } from "./warmpoolstateenum";
import { WarmPoolStatusEnum } from "./warmpoolstatusenum";
/**
 * Describes a warm pool configuration.
**/
export declare class WarmPoolConfiguration extends SpeakeasyBase {
    maxGroupPreparedCapacity?: number;
    minSize?: number;
    poolState?: WarmPoolStateEnum;
    status?: WarmPoolStatusEnum;
}

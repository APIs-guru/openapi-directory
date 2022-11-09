import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityTypeEnum } from "./entitytypeenum";
/**
 * <p>Provides information about an entity. </p> <p> </p>
**/
export declare class Entity extends SpeakeasyBase {
    beginOffset?: number;
    endOffset?: number;
    score?: number;
    text?: string;
    type?: EntityTypeEnum;
}

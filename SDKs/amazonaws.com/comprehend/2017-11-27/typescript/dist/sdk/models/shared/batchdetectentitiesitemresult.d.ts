import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Entity } from "./entity";
/**
 * The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
**/
export declare class BatchDetectEntitiesItemResult extends SpeakeasyBase {
    entities?: Entity[];
    index?: number;
}

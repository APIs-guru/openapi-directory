import { SpeakeasyBase } from "../../../internal/utils";
import { InvalidationBatch } from "./invalidationbatch";
/**
 * An invalidation.
**/
export declare class Invalidation extends SpeakeasyBase {
    createTime: Date;
    id: string;
    invalidationBatch: InvalidationBatch;
    status: string;
}

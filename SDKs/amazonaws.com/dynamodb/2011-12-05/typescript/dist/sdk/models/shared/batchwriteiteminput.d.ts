import { SpeakeasyBase } from "../../../internal/utils";
import { WriteRequest } from "./writerequest";
export declare class BatchWriteItemInput extends SpeakeasyBase {
    requestItems: Map<string, WriteRequest[]>;
}

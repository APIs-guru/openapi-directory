import { SpeakeasyBase } from "../../../internal/utils";
import { Trigger } from "./trigger";
export declare class BatchGetTriggersResponse extends SpeakeasyBase {
    triggers?: Trigger[];
    triggersNotFound?: string[];
}

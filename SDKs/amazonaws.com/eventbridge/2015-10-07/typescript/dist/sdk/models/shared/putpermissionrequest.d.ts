import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Condition } from "./condition";
export declare class PutPermissionRequest extends SpeakeasyBase {
    action?: string;
    condition?: Condition;
    eventBusName?: string;
    policy?: string;
    principal?: string;
    statementId?: string;
}

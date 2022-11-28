import { SpeakeasyBase } from "../../../internal/utils";
import { TargetDescription } from "./targetdescription";
import { TargetHealth } from "./targethealth";
/**
 * Information about the health of a target.
**/
export declare class TargetHealthDescription extends SpeakeasyBase {
    healthCheckPort?: string;
    target?: TargetDescription;
    targetHealth?: TargetHealth;
}

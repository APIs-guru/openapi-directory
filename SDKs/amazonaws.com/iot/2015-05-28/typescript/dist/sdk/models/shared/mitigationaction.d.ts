import { SpeakeasyBase } from "../../../internal/utils";
import { MitigationActionParams } from "./mitigationactionparams";
/**
 * Describes which changes should be applied as part of a mitigation action.
**/
export declare class MitigationAction extends SpeakeasyBase {
    actionParams?: MitigationActionParams;
    id?: string;
    name?: string;
    roleArn?: string;
}

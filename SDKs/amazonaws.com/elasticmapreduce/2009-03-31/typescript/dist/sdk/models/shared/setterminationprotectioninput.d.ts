import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The input argument to the <a>TerminationProtection</a> operation.
**/
export declare class SetTerminationProtectionInput extends SpeakeasyBase {
    jobFlowIds: string[];
    terminationProtected: boolean;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ValidatePolicyFinding } from "./validatepolicyfinding";
export declare class ValidatePolicyResponse extends SpeakeasyBase {
    findings: ValidatePolicyFinding[];
    nextToken?: string;
}

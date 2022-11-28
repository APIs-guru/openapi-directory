import { SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
/**
 * Contains the inputs for the <a>CreateComputer</a> operation.
**/
export declare class CreateComputerRequest extends SpeakeasyBase {
    computerAttributes?: Attribute[];
    computerName: string;
    directoryId: string;
    organizationalUnitDistinguishedName?: string;
    password: string;
}

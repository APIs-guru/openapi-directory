import { SpeakeasyBase } from "../../../internal/utils";
import { IamActionDefinition } from "./iamactiondefinition";
import { ScpActionDefinition } from "./scpactiondefinition";
import { SsmActionDefinition } from "./ssmactiondefinition";
/**
 *  Specifies all of the type-specific parameters.
**/
export declare class Definition extends SpeakeasyBase {
    iamActionDefinition?: IamActionDefinition;
    scpActionDefinition?: ScpActionDefinition;
    ssmActionDefinition?: SsmActionDefinition;
}

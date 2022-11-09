import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IamActionDefinition } from "./iamactiondefinition";
import { ScpActionDefinition } from "./scpactiondefinition";
import { SsmActionDefinition } from "./ssmactiondefinition";


// Definition
/** 
 *  Specifies all of the type-specific parameters. 
**/
export class Definition extends SpeakeasyBase {
  @Metadata({ data: "json, name=IamActionDefinition" })
  iamActionDefinition?: IamActionDefinition;

  @Metadata({ data: "json, name=ScpActionDefinition" })
  scpActionDefinition?: ScpActionDefinition;

  @Metadata({ data: "json, name=SsmActionDefinition" })
  ssmActionDefinition?: SsmActionDefinition;
}

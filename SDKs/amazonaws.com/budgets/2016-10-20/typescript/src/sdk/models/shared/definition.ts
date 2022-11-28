import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IamActionDefinition } from "./iamactiondefinition";
import { ScpActionDefinition } from "./scpactiondefinition";
import { SsmActionDefinition } from "./ssmactiondefinition";



// Definition
/** 
 *  Specifies all of the type-specific parameters. 
**/
export class Definition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IamActionDefinition" })
  iamActionDefinition?: IamActionDefinition;

  @SpeakeasyMetadata({ data: "json, name=ScpActionDefinition" })
  scpActionDefinition?: ScpActionDefinition;

  @SpeakeasyMetadata({ data: "json, name=SsmActionDefinition" })
  ssmActionDefinition?: SsmActionDefinition;
}

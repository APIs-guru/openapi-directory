import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionDefaultConfig } from "./functiondefaultconfig";
import { Function } from "./function";



// FunctionDefinitionVersion
/** 
 * Information about a function definition version.
**/
export class FunctionDefinitionVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultConfig" })
  defaultConfig?: FunctionDefaultConfig;

  @SpeakeasyMetadata({ data: "json, name=Functions", elemType: Function })
  functions?: Function[];
}

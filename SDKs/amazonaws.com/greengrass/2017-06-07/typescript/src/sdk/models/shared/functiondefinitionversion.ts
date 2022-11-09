import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FunctionDefaultConfig } from "./functiondefaultconfig";
import { Function } from "./function";


// FunctionDefinitionVersion
/** 
 * Information about a function definition version.
**/
export class FunctionDefinitionVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultConfig" })
  defaultConfig?: FunctionDefaultConfig;

  @Metadata({ data: "json, name=Functions", elemType: shared.Function })
  functions?: Function[];
}

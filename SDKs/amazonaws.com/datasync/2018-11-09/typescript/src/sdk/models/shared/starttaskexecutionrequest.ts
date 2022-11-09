import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FilterRule } from "./filterrule";
import { FilterRule } from "./filterrule";
import { Options } from "./options";


// StartTaskExecutionRequest
/** 
 * StartTaskExecutionRequest
**/
export class StartTaskExecutionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Excludes", elemType: shared.FilterRule })
  excludes?: FilterRule[];

  @Metadata({ data: "json, name=Includes", elemType: shared.FilterRule })
  includes?: FilterRule[];

  @Metadata({ data: "json, name=OverrideOptions" })
  overrideOptions?: Options;

  @Metadata({ data: "json, name=TaskArn" })
  taskArn: string;
}

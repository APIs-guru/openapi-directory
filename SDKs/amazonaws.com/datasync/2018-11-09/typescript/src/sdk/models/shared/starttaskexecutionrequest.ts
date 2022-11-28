import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterRule } from "./filterrule";
import { Options } from "./options";



// StartTaskExecutionRequest
/** 
 * StartTaskExecutionRequest
**/
export class StartTaskExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Excludes", elemType: FilterRule })
  excludes?: FilterRule[];

  @SpeakeasyMetadata({ data: "json, name=Includes", elemType: FilterRule })
  includes?: FilterRule[];

  @SpeakeasyMetadata({ data: "json, name=OverrideOptions" })
  overrideOptions?: Options;

  @SpeakeasyMetadata({ data: "json, name=TaskArn" })
  taskArn: string;
}

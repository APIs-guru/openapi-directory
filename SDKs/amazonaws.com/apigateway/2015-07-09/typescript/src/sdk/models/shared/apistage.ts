import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ThrottleSettings } from "./throttlesettings";


// ApiStage
/** 
 * API stage name of the associated API stage in a usage plan.
**/
export class ApiStage extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiId" })
  apiId?: string;

  @Metadata({ data: "json, name=stage" })
  stage?: string;

  @Metadata({ data: "json, name=throttle", elemType: shared.ThrottleSettings })
  throttle?: Map<string, ThrottleSettings>;
}

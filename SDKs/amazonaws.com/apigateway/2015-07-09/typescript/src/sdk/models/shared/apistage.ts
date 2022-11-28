import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThrottleSettings } from "./throttlesettings";



// ApiStage
/** 
 * API stage name of the associated API stage in a usage plan.
**/
export class ApiStage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiId" })
  apiId?: string;

  @SpeakeasyMetadata({ data: "json, name=stage" })
  stage?: string;

  @SpeakeasyMetadata({ data: "json, name=throttle", elemType: ThrottleSettings })
  throttle?: Map<string, ThrottleSettings>;
}

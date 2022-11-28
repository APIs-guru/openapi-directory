import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateErrorCodeEnum } from "./launchtemplateerrorcodeenum";



// ResponseError
/** 
 * Describes the error that's returned when you cannot delete a launch template version.
**/
export class ResponseError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: LaunchTemplateErrorCodeEnum;

  @SpeakeasyMetadata()
  message?: string;
}

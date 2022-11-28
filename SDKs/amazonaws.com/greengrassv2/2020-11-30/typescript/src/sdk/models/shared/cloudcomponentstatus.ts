import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudComponentStateEnum } from "./cloudcomponentstateenum";



// CloudComponentStatus
/** 
 * Contains the status of a component in the IoT Greengrass service.
**/
export class CloudComponentStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=componentState" })
  componentState?: CloudComponentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudComponentStateEnum } from "./cloudcomponentstateenum";


// CloudComponentStatus
/** 
 * Contains the status of a component in the IoT Greengrass service.
**/
export class CloudComponentStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=componentState" })
  componentState?: CloudComponentStateEnum;

  @Metadata({ data: "json, name=errors" })
  errors?: Map<string, string>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}

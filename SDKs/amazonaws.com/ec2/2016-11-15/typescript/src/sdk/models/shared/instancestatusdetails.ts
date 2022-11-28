import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusNameEnum } from "./statusnameenum";
import { StatusTypeEnum } from "./statustypeenum";



// InstanceStatusDetails
/** 
 * Describes the instance status.
**/
export class InstanceStatusDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  impairedSince?: Date;

  @SpeakeasyMetadata()
  name?: StatusNameEnum;

  @SpeakeasyMetadata()
  status?: StatusTypeEnum;
}

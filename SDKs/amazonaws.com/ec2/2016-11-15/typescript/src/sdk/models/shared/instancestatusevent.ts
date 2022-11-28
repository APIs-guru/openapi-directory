import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventCodeEnum } from "./eventcodeenum";



// InstanceStatusEvent
/** 
 * Describes a scheduled event for an instance.
**/
export class InstanceStatusEvent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: EventCodeEnum;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  instanceEventId?: string;

  @SpeakeasyMetadata()
  notAfter?: Date;

  @SpeakeasyMetadata()
  notBefore?: Date;

  @SpeakeasyMetadata()
  notBeforeDeadline?: Date;
}

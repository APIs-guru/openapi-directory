import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnsuccessfulInstanceCreditSpecificationItemError } from "./unsuccessfulinstancecreditspecificationitemerror";



// UnsuccessfulInstanceCreditSpecificationItem
/** 
 * Describes the burstable performance instance whose credit option for CPU usage was not modified.
**/
export class UnsuccessfulInstanceCreditSpecificationItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  error?: UnsuccessfulInstanceCreditSpecificationItemError;

  @SpeakeasyMetadata()
  instanceId?: string;
}

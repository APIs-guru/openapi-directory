import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnsuccessfulInstanceCreditSpecificationErrorCodeEnum } from "./unsuccessfulinstancecreditspecificationerrorcodeenum";



// UnsuccessfulInstanceCreditSpecificationItemError
/** 
 * Information about the error for the burstable performance instance whose credit option for CPU usage was not modified.
**/
export class UnsuccessfulInstanceCreditSpecificationItemError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: UnsuccessfulInstanceCreditSpecificationErrorCodeEnum;

  @SpeakeasyMetadata()
  message?: string;
}

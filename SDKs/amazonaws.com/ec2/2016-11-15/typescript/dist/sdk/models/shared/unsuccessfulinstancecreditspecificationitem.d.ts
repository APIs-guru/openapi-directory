import { SpeakeasyBase } from "../../../internal/utils";
import { UnsuccessfulInstanceCreditSpecificationItemError } from "./unsuccessfulinstancecreditspecificationitemerror";
/**
 * Describes the burstable performance instance whose credit option for CPU usage was not modified.
**/
export declare class UnsuccessfulInstanceCreditSpecificationItem extends SpeakeasyBase {
    error?: UnsuccessfulInstanceCreditSpecificationItemError;
    instanceId?: string;
}

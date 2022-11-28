import { SpeakeasyBase } from "../../../internal/utils";
import { SuccessfulInstanceCreditSpecificationItem } from "./successfulinstancecreditspecificationitem";
import { UnsuccessfulInstanceCreditSpecificationItem } from "./unsuccessfulinstancecreditspecificationitem";
export declare class ModifyInstanceCreditSpecificationResult extends SpeakeasyBase {
    successfulInstanceCreditSpecifications?: SuccessfulInstanceCreditSpecificationItem[];
    unsuccessfulInstanceCreditSpecifications?: UnsuccessfulInstanceCreditSpecificationItem[];
}

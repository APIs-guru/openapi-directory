import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuccessfulInstanceCreditSpecificationItem } from "./successfulinstancecreditspecificationitem";
import { UnsuccessfulInstanceCreditSpecificationItem } from "./unsuccessfulinstancecreditspecificationitem";



export class ModifyInstanceCreditSpecificationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: SuccessfulInstanceCreditSpecificationItem })
  successfulInstanceCreditSpecifications?: SuccessfulInstanceCreditSpecificationItem[];

  @SpeakeasyMetadata({ elemType: UnsuccessfulInstanceCreditSpecificationItem })
  unsuccessfulInstanceCreditSpecifications?: UnsuccessfulInstanceCreditSpecificationItem[];
}

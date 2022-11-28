import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedInstancesModificationResult } from "./reservedinstancesmodificationresult";
import { ReservedInstancesId } from "./reservedinstancesid";



// ReservedInstancesModification
/** 
 * Describes a Reserved Instance modification.
**/
export class ReservedInstancesModification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: string;

  @SpeakeasyMetadata()
  createDate?: Date;

  @SpeakeasyMetadata()
  effectiveDate?: Date;

  @SpeakeasyMetadata({ elemType: ReservedInstancesModificationResult })
  modificationResults?: ReservedInstancesModificationResult[];

  @SpeakeasyMetadata({ elemType: ReservedInstancesId })
  reservedInstancesIds?: ReservedInstancesId[];

  @SpeakeasyMetadata()
  reservedInstancesModificationId?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  statusMessage?: string;

  @SpeakeasyMetadata()
  updateDate?: Date;
}

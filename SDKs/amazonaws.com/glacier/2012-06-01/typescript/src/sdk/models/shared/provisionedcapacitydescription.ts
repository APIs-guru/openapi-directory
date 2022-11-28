import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProvisionedCapacityDescription
/** 
 * The definition for a provisioned capacity unit.
**/
export class ProvisionedCapacityDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CapacityId" })
  capacityId?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpirationDate" })
  expirationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProvisionedCapacityDescription
/** 
 * The definition for a provisioned capacity unit.
**/
export class ProvisionedCapacityDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=CapacityId" })
  capacityId?: string;

  @Metadata({ data: "json, name=ExpirationDate" })
  expirationDate?: string;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: string;
}

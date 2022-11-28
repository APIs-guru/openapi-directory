import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProvisionedThroughputOverride
/** 
 * Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings.
**/
export class ProvisionedThroughputOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReadCapacityUnits" })
  readCapacityUnits?: number;
}

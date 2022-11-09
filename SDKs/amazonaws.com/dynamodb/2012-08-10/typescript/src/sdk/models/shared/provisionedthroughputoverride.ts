import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProvisionedThroughputOverride
/** 
 * Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings.
**/
export class ProvisionedThroughputOverride extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReadCapacityUnits" })
  readCapacityUnits?: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProvisionedThroughputDescription
/** 
 * Represents the provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases.
**/
export class ProvisionedThroughputDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=LastDecreaseDateTime" })
  lastDecreaseDateTime?: Date;

  @Metadata({ data: "json, name=LastIncreaseDateTime" })
  lastIncreaseDateTime?: Date;

  @Metadata({ data: "json, name=NumberOfDecreasesToday" })
  numberOfDecreasesToday?: number;

  @Metadata({ data: "json, name=ReadCapacityUnits" })
  readCapacityUnits?: number;

  @Metadata({ data: "json, name=WriteCapacityUnits" })
  writeCapacityUnits?: number;
}

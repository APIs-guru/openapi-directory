import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProvisionedThroughputDescription
/** 
 * Represents the provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases.
**/
export class ProvisionedThroughputDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LastDecreaseDateTime" })
  lastDecreaseDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastIncreaseDateTime" })
  lastIncreaseDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=NumberOfDecreasesToday" })
  numberOfDecreasesToday?: number;

  @SpeakeasyMetadata({ data: "json, name=ReadCapacityUnits" })
  readCapacityUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=WriteCapacityUnits" })
  writeCapacityUnits?: number;
}

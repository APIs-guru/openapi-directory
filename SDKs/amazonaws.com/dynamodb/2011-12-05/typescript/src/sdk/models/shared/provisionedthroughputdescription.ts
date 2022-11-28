import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



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

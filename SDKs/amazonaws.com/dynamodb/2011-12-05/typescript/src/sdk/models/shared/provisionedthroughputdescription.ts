import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


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

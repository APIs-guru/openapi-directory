import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSystemModelsAttributeValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=TimeStamp" })
  timeStamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}

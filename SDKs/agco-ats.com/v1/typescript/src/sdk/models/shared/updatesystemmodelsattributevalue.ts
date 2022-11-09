import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateSystemModelsAttributeValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: string;

  @Metadata({ data: "json, name=TimeStamp" })
  timeStamp?: Date;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}

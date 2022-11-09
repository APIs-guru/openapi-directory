import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiModelsLog extends SpeakeasyBase {
  @Metadata({ data: "json, name=ID" })
  id?: string;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=TimeStamp" })
  timeStamp?: Date;
}

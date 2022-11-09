import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartThingRegistrationTaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=taskId" })
  taskId?: string;
}

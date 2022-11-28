import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartThingRegistrationTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;
}

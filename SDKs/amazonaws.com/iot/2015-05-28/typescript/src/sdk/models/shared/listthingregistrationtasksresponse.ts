import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListThingRegistrationTasksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=taskIds" })
  taskIds?: string[];
}

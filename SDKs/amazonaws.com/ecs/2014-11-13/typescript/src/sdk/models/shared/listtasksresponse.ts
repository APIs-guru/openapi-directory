import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTasksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=taskArns" })
  taskArns?: string[];
}

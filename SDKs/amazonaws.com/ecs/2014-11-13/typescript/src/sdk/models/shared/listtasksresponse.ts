import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=taskArns" })
  taskArns?: string[];
}

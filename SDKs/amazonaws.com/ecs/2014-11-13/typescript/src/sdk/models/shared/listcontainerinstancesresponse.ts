import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListContainerInstancesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerInstanceArns" })
  containerInstanceArns?: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListContainerInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerInstanceArns" })
  containerInstanceArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

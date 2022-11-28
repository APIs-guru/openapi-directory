import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerInstanceStatusEnum } from "./containerinstancestatusenum";



export class ListContainerInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ContainerInstanceStatusEnum;
}

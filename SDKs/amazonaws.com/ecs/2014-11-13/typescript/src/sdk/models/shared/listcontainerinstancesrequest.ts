import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerInstanceStatusEnum } from "./containerinstancestatusenum";


export class ListContainerInstancesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=status" })
  status?: ContainerInstanceStatusEnum;
}

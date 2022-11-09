import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventSourceStateEnum } from "./eventsourcestateenum";


export class DescribeEventSourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=ExpirationTime" })
  expirationTime?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=State" })
  state?: EventSourceStateEnum;
}

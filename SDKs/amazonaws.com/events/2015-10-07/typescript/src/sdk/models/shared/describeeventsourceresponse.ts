import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSourceStateEnum } from "./eventsourcestateenum";



export class DescribeEventSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ExpirationTime" })
  expirationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: EventSourceStateEnum;
}

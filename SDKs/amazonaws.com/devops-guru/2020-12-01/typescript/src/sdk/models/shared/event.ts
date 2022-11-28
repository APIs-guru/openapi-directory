import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventDataSourceEnum } from "./eventdatasourceenum";
import { EventClassEnum } from "./eventclassenum";
import { ResourceCollection } from "./resourcecollection";
import { EventResource } from "./eventresource";



// Event
/** 
 *  An AWS resource event. AWS resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions. 
**/
export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataSource" })
  dataSource?: EventDataSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=EventClass" })
  eventClass?: EventClassEnum;

  @SpeakeasyMetadata({ data: "json, name=EventSource" })
  eventSource?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceCollection" })
  resourceCollection?: ResourceCollection;

  @SpeakeasyMetadata({ data: "json, name=Resources", elemType: EventResource })
  resources?: EventResource[];

  @SpeakeasyMetadata({ data: "json, name=Time" })
  time?: Date;
}

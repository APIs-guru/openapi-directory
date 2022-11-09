import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventDataSourceEnum } from "./eventdatasourceenum";
import { EventClassEnum } from "./eventclassenum";
import { ResourceCollection } from "./resourcecollection";
import { EventResource } from "./eventresource";


// Event
/** 
 *  An AWS resource event. AWS resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions. 
**/
export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataSource" })
  dataSource?: EventDataSourceEnum;

  @Metadata({ data: "json, name=EventClass" })
  eventClass?: EventClassEnum;

  @Metadata({ data: "json, name=EventSource" })
  eventSource?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ResourceCollection" })
  resourceCollection?: ResourceCollection;

  @Metadata({ data: "json, name=Resources", elemType: shared.EventResource })
  resources?: EventResource[];

  @Metadata({ data: "json, name=Time" })
  time?: Date;
}

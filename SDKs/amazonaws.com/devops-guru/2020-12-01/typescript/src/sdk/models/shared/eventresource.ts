import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventResource
/** 
 *  The AWS resource that emitted an event. AWS resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions. 
**/
export class EventResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}

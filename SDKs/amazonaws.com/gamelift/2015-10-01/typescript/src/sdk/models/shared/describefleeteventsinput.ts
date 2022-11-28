import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeFleetEventsInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeFleetEventsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;
}

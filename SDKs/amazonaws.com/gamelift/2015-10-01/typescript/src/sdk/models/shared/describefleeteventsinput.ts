import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeFleetEventsInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeFleetEventsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=FleetId" })
  fleetId: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;
}

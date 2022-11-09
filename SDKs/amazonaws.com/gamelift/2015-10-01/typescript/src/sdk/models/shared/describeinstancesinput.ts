import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeInstancesInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeInstancesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetId" })
  fleetId: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=Location" })
  location?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

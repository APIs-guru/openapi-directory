import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScalingStatusTypeEnum } from "./scalingstatustypeenum";


// DescribeScalingPoliciesInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeScalingPoliciesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetId" })
  fleetId: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=Location" })
  location?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StatusFilter" })
  statusFilter?: ScalingStatusTypeEnum;
}

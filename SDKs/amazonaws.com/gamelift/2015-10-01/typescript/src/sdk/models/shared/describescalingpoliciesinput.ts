import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalingStatusTypeEnum } from "./scalingstatustypeenum";



// DescribeScalingPoliciesInput
/** 
 * Represents the input for a request operation.
**/
export class DescribeScalingPoliciesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusFilter" })
  statusFilter?: ScalingStatusTypeEnum;
}

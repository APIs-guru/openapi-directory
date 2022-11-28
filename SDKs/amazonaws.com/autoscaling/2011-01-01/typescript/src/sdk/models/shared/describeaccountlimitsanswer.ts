import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeAccountLimitsAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  maxNumberOfAutoScalingGroups?: number;

  @SpeakeasyMetadata()
  maxNumberOfLaunchConfigurations?: number;

  @SpeakeasyMetadata()
  numberOfAutoScalingGroups?: number;

  @SpeakeasyMetadata()
  numberOfLaunchConfigurations?: number;
}

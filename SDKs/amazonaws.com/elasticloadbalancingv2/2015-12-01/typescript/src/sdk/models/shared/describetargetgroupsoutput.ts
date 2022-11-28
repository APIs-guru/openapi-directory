import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetGroup } from "./targetgroup";



export class DescribeTargetGroupsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata({ elemType: TargetGroup })
  targetGroups?: TargetGroup[];
}

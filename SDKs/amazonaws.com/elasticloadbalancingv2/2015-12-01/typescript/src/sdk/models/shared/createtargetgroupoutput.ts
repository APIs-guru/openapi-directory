import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetGroup } from "./targetgroup";



export class CreateTargetGroupOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TargetGroup })
  targetGroups?: TargetGroup[];
}

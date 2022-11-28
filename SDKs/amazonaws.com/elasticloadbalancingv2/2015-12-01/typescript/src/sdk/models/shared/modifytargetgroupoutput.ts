import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetGroup } from "./targetgroup";



export class ModifyTargetGroupOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TargetGroup })
  targetGroups?: TargetGroup[];
}

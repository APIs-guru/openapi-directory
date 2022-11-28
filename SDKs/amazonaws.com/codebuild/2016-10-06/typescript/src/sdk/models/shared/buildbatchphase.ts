import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PhaseContext } from "./phasecontext";
import { StatusTypeEnum } from "./statustypeenum";
import { BuildBatchPhaseTypeEnum } from "./buildbatchphasetypeenum";



// BuildBatchPhase
/** 
 * Contains information about a stage for a batch build.
**/
export class BuildBatchPhase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contexts", elemType: PhaseContext })
  contexts?: PhaseContext[];

  @SpeakeasyMetadata({ data: "json, name=durationInSeconds" })
  durationInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=phaseStatus" })
  phaseStatus?: StatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=phaseType" })
  phaseType?: BuildBatchPhaseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;
}

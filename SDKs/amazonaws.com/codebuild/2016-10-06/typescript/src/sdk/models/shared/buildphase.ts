import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PhaseContext } from "./phasecontext";
import { StatusTypeEnum } from "./statustypeenum";
import { BuildPhaseTypeEnum } from "./buildphasetypeenum";



// BuildPhase
/** 
 * Information about a stage for a build.
**/
export class BuildPhase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contexts", elemType: PhaseContext })
  contexts?: PhaseContext[];

  @SpeakeasyMetadata({ data: "json, name=durationInSeconds" })
  durationInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=phaseStatus" })
  phaseStatus?: StatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=phaseType" })
  phaseType?: BuildPhaseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;
}

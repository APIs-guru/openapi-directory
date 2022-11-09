import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PhaseContext } from "./phasecontext";
import { StatusTypeEnum } from "./statustypeenum";
import { BuildBatchPhaseTypeEnum } from "./buildbatchphasetypeenum";


// BuildBatchPhase
/** 
 * Contains information about a stage for a batch build.
**/
export class BuildBatchPhase extends SpeakeasyBase {
  @Metadata({ data: "json, name=contexts", elemType: shared.PhaseContext })
  contexts?: PhaseContext[];

  @Metadata({ data: "json, name=durationInSeconds" })
  durationInSeconds?: number;

  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=phaseStatus" })
  phaseStatus?: StatusTypeEnum;

  @Metadata({ data: "json, name=phaseType" })
  phaseType?: BuildBatchPhaseTypeEnum;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EvaluationMethodEnum } from "./evaluationmethodenum";
import { DetectorModelVersionStatusEnum } from "./detectormodelversionstatusenum";


// DetectorModelVersionSummary
/** 
 * Information about the detector model version.
**/
export class DetectorModelVersionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=detectorModelArn" })
  detectorModelArn?: string;

  @Metadata({ data: "json, name=detectorModelName" })
  detectorModelName?: string;

  @Metadata({ data: "json, name=detectorModelVersion" })
  detectorModelVersion?: string;

  @Metadata({ data: "json, name=evaluationMethod" })
  evaluationMethod?: EvaluationMethodEnum;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=status" })
  status?: DetectorModelVersionStatusEnum;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EvaluationMethodEnum } from "./evaluationmethodenum";
import { DetectorModelVersionStatusEnum } from "./detectormodelversionstatusenum";



// DetectorModelVersionSummary
/** 
 * Information about the detector model version.
**/
export class DetectorModelVersionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=detectorModelArn" })
  detectorModelArn?: string;

  @SpeakeasyMetadata({ data: "json, name=detectorModelName" })
  detectorModelName?: string;

  @SpeakeasyMetadata({ data: "json, name=detectorModelVersion" })
  detectorModelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=evaluationMethod" })
  evaluationMethod?: EvaluationMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DetectorModelVersionStatusEnum;
}

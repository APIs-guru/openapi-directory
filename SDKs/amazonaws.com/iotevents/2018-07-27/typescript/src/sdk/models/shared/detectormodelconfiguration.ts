import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EvaluationMethodEnum } from "./evaluationmethodenum";
import { DetectorModelVersionStatusEnum } from "./detectormodelversionstatusenum";


// DetectorModelConfiguration
/** 
 * Information about how the detector model is configured.
**/
export class DetectorModelConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=detectorModelArn" })
  detectorModelArn?: string;

  @Metadata({ data: "json, name=detectorModelDescription" })
  detectorModelDescription?: string;

  @Metadata({ data: "json, name=detectorModelName" })
  detectorModelName?: string;

  @Metadata({ data: "json, name=detectorModelVersion" })
  detectorModelVersion?: string;

  @Metadata({ data: "json, name=evaluationMethod" })
  evaluationMethod?: EvaluationMethodEnum;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=status" })
  status?: DetectorModelVersionStatusEnum;
}

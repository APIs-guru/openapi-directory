import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentRunNotification } from "./assessmentrunnotification";
import { AssessmentRunStateEnum } from "./assessmentrunstateenum";
import { AssessmentRunStateChange } from "./assessmentrunstatechange";
import { Attribute } from "./attribute";



// AssessmentRun
/** 
 * <p>A snapshot of an Amazon Inspector assessment run that contains the findings of the assessment run .</p> <p>Used as the response element in the <a>DescribeAssessmentRuns</a> action.</p>
**/
export class AssessmentRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=assessmentTemplateArn" })
  assessmentTemplateArn: string;

  @SpeakeasyMetadata({ data: "json, name=completedAt" })
  completedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=dataCollected" })
  dataCollected: boolean;

  @SpeakeasyMetadata({ data: "json, name=durationInSeconds" })
  durationInSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=findingCounts" })
  findingCounts: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=notifications", elemType: AssessmentRunNotification })
  notifications: AssessmentRunNotification[];

  @SpeakeasyMetadata({ data: "json, name=rulesPackageArns" })
  rulesPackageArns: string[];

  @SpeakeasyMetadata({ data: "json, name=startedAt" })
  startedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: AssessmentRunStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateChangedAt" })
  stateChangedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=stateChanges", elemType: AssessmentRunStateChange })
  stateChanges: AssessmentRunStateChange[];

  @SpeakeasyMetadata({ data: "json, name=userAttributesForFindings", elemType: Attribute })
  userAttributesForFindings: Attribute[];
}

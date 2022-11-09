import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssessmentRunNotification } from "./assessmentrunnotification";
import { AssessmentRunStateEnum } from "./assessmentrunstateenum";
import { AssessmentRunStateChange } from "./assessmentrunstatechange";
import { Attribute } from "./attribute";


// AssessmentRun
/** 
 * <p>A snapshot of an Amazon Inspector assessment run that contains the findings of the assessment run .</p> <p>Used as the response element in the <a>DescribeAssessmentRuns</a> action.</p>
**/
export class AssessmentRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=assessmentTemplateArn" })
  assessmentTemplateArn: string;

  @Metadata({ data: "json, name=completedAt" })
  completedAt?: Date;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=dataCollected" })
  dataCollected: boolean;

  @Metadata({ data: "json, name=durationInSeconds" })
  durationInSeconds: number;

  @Metadata({ data: "json, name=findingCounts" })
  findingCounts: Map<string, number>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=notifications", elemType: shared.AssessmentRunNotification })
  notifications: AssessmentRunNotification[];

  @Metadata({ data: "json, name=rulesPackageArns" })
  rulesPackageArns: string[];

  @Metadata({ data: "json, name=startedAt" })
  startedAt?: Date;

  @Metadata({ data: "json, name=state" })
  state: AssessmentRunStateEnum;

  @Metadata({ data: "json, name=stateChangedAt" })
  stateChangedAt: Date;

  @Metadata({ data: "json, name=stateChanges", elemType: shared.AssessmentRunStateChange })
  stateChanges: AssessmentRunStateChange[];

  @Metadata({ data: "json, name=userAttributesForFindings", elemType: shared.Attribute })
  userAttributesForFindings: Attribute[];
}

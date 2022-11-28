import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentRunNotification } from "./assessmentrunnotification";
import { AssessmentRunStateEnum } from "./assessmentrunstateenum";
import { AssessmentRunStateChange } from "./assessmentrunstatechange";
import { Attribute } from "./attribute";
/**
 * <p>A snapshot of an Amazon Inspector assessment run that contains the findings of the assessment run .</p> <p>Used as the response element in the <a>DescribeAssessmentRuns</a> action.</p>
**/
export declare class AssessmentRun extends SpeakeasyBase {
    arn: string;
    assessmentTemplateArn: string;
    completedAt?: Date;
    createdAt: Date;
    dataCollected: boolean;
    durationInSeconds: number;
    findingCounts: Map<string, number>;
    name: string;
    notifications: AssessmentRunNotification[];
    rulesPackageArns: string[];
    startedAt?: Date;
    state: AssessmentRunStateEnum;
    stateChangedAt: Date;
    stateChanges: AssessmentRunStateChange[];
    userAttributesForFindings: Attribute[];
}

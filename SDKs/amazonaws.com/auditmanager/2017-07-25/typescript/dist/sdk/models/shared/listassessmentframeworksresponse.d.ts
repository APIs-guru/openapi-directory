import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentFrameworkMetadata } from "./assessmentframeworkmetadata";
export declare class ListAssessmentFrameworksResponse extends SpeakeasyBase {
    frameworkMetadataList?: AssessmentFrameworkMetadata[];
    nextToken?: string;
}

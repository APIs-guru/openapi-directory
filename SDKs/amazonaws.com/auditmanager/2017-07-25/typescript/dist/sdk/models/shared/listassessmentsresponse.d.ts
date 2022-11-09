import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AssessmentMetadataItem } from "./assessmentmetadataitem";
export declare class ListAssessmentsResponse extends SpeakeasyBase {
    assessmentMetadata?: AssessmentMetadataItem[];
    nextToken?: string;
}

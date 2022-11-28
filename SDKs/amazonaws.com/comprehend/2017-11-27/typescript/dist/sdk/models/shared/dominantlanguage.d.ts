import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Returns the code for the dominant language in the input text and the level of confidence that Amazon Comprehend has in the accuracy of the detection.
**/
export declare class DominantLanguage extends SpeakeasyBase {
    languageCode?: string;
    score?: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a grok classifier to update when passed to <code>UpdateClassifier</code>.
**/
export declare class UpdateGrokClassifierRequest extends SpeakeasyBase {
    classification?: string;
    customPatterns?: string;
    grokPattern?: string;
    name: string;
}

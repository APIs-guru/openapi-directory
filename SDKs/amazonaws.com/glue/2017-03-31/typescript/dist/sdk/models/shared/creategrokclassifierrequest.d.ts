import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a <code>grok</code> classifier for <code>CreateClassifier</code> to create.
**/
export declare class CreateGrokClassifierRequest extends SpeakeasyBase {
    classification: string;
    customPatterns?: string;
    grokPattern: string;
    name: string;
}

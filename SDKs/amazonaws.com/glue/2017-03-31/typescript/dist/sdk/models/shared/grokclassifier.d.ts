import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A classifier that uses <code>grok</code> patterns.
**/
export declare class GrokClassifier extends SpeakeasyBase {
    classification: string;
    creationTime?: Date;
    customPatterns?: string;
    grokPattern: string;
    lastUpdated?: Date;
    name: string;
    version?: number;
}

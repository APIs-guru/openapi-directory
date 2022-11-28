import { SpeakeasyBase } from "../../../internal/utils";
import { Classifier } from "./classifier";
export declare class GetClassifiersResponse extends SpeakeasyBase {
    classifiers?: Classifier[];
    nextToken?: string;
}

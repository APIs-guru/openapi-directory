import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityRecognizerProperties } from "./entityrecognizerproperties";
export declare class ListEntityRecognizersResponse extends SpeakeasyBase {
    entityRecognizerPropertiesList?: EntityRecognizerProperties[];
    nextToken?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ThingAttribute } from "./thingattribute";
/**
 * The output from the ListThings operation.
**/
export declare class ListThingsResponse extends SpeakeasyBase {
    nextToken?: string;
    things?: ThingAttribute[];
}

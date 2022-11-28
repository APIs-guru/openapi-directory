import { SpeakeasyBase } from "../../../internal/utils";
import { SourceDataColumnProperties } from "./sourcedatacolumnproperties";
/**
 * An object that contains the options relating to the destination of the import request.
**/
export declare class DestinationOptions extends SpeakeasyBase {
    columnMap?: Map<string, SourceDataColumnProperties>;
}

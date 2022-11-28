import { SpeakeasyBase } from "../../../internal/utils";
import { DelimitedTextImportOptions } from "./delimitedtextimportoptions";
import { DestinationOptions } from "./destinationoptions";
/**
 * An object that contains the options specified by the sumitter of the import request.
**/
export declare class ImportOptions extends SpeakeasyBase {
    delimitedTextOptions?: DelimitedTextImportOptions;
    destinationOptions?: DestinationOptions;
}

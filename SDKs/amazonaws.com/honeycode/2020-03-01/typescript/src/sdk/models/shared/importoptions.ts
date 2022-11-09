import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DelimitedTextImportOptions } from "./delimitedtextimportoptions";
import { DestinationOptions } from "./destinationoptions";


// ImportOptions
/** 
 * An object that contains the options specified by the sumitter of the import request.
**/
export class ImportOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=delimitedTextOptions" })
  delimitedTextOptions?: DelimitedTextImportOptions;

  @Metadata({ data: "json, name=destinationOptions" })
  destinationOptions?: DestinationOptions;
}

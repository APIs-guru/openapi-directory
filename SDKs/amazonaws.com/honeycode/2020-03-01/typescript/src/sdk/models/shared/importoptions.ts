import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DelimitedTextImportOptions } from "./delimitedtextimportoptions";
import { DestinationOptions } from "./destinationoptions";



// ImportOptions
/** 
 * An object that contains the options specified by the sumitter of the import request.
**/
export class ImportOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delimitedTextOptions" })
  delimitedTextOptions?: DelimitedTextImportOptions;

  @SpeakeasyMetadata({ data: "json, name=destinationOptions" })
  destinationOptions?: DestinationOptions;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceDataColumnProperties } from "./sourcedatacolumnproperties";



// DestinationOptions
/** 
 * An object that contains the options relating to the destination of the import request.
**/
export class DestinationOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnMap", elemType: SourceDataColumnProperties })
  columnMap?: Map<string, SourceDataColumnProperties>;
}

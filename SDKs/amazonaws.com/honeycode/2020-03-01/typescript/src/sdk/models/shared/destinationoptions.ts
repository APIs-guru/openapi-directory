import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SourceDataColumnProperties } from "./sourcedatacolumnproperties";


// DestinationOptions
/** 
 * An object that contains the options relating to the destination of the import request.
**/
export class DestinationOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnMap", elemType: shared.SourceDataColumnProperties })
  columnMap?: Map<string, SourceDataColumnProperties>;
}

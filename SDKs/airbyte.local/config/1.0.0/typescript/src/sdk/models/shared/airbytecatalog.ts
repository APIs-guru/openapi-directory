import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AirbyteStreamAndConfiguration } from "./airbytestreamandconfiguration";


// AirbyteCatalog
/** 
 * describes the available schema (catalog).
**/
export class AirbyteCatalog extends SpeakeasyBase {
  @Metadata({ data: "json, name=streams", elemType: shared.AirbyteStreamAndConfiguration })
  streams: AirbyteStreamAndConfiguration[];
}

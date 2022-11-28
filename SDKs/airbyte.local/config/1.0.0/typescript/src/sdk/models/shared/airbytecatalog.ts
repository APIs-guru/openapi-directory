import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AirbyteStreamAndConfiguration } from "./airbytestreamandconfiguration";



// AirbyteCatalog
/** 
 * describes the available schema (catalog).
**/
export class AirbyteCatalog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=streams", elemType: AirbyteStreamAndConfiguration })
  streams: AirbyteStreamAndConfiguration[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SapoDataSourceProperties
/** 
 *  The properties that are applied when using SAPOData as a flow source. 
**/
export class SapoDataSourceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectPath" })
  objectPath?: string;
}

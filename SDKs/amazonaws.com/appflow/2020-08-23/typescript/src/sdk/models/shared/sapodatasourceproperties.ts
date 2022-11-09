import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SapoDataSourceProperties
/** 
 *  The properties that are applied when using SAPOData as a flow source. 
**/
export class SapoDataSourceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectPath" })
  objectPath?: string;
}

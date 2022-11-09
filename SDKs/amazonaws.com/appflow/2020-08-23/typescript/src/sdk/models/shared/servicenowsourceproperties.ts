import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceNowSourceProperties
/** 
 *  The properties that are applied when ServiceNow is being used as a source. 
**/
export class ServiceNowSourceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=object" })
  object: string;
}

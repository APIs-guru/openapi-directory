import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceNowSourceProperties
/** 
 * The properties that are applied when ServiceNow is being used as a source.
**/
export class ServiceNowSourceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Object" })
  object: string;
}

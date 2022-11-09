import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SourceFieldProperties
/** 
 *  The properties that can be applied to a field when the connector is being used as a source. 
**/
export class SourceFieldProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=isQueryable" })
  isQueryable?: boolean;

  @Metadata({ data: "json, name=isRetrievable" })
  isRetrievable?: boolean;
}

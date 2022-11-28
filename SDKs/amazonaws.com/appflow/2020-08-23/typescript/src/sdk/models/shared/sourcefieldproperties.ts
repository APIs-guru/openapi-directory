import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SourceFieldProperties
/** 
 *  The properties that can be applied to a field when the connector is being used as a source. 
**/
export class SourceFieldProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isQueryable" })
  isQueryable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isRetrievable" })
  isRetrievable?: boolean;
}

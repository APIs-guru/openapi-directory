import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationFieldProperties } from "./destinationfieldproperties";
import { SourceFieldProperties } from "./sourcefieldproperties";
import { SupportedFieldTypeDetails } from "./supportedfieldtypedetails";



// ConnectorEntityField
/** 
 *  Describes the data model of a connector field. For example, for an <i>account</i> entity, the fields would be <i>account name</i>, <i>account ID</i>, and so on. 
**/
export class ConnectorEntityField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationProperties" })
  destinationProperties?: DestinationFieldProperties;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceProperties" })
  sourceProperties?: SourceFieldProperties;

  @SpeakeasyMetadata({ data: "json, name=supportedFieldTypeDetails" })
  supportedFieldTypeDetails?: SupportedFieldTypeDetails;
}

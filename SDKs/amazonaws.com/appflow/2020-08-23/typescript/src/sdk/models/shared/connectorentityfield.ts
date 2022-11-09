import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DestinationFieldProperties } from "./destinationfieldproperties";
import { SourceFieldProperties } from "./sourcefieldproperties";
import { SupportedFieldTypeDetails } from "./supportedfieldtypedetails";


// ConnectorEntityField
/** 
 *  Describes the data model of a connector field. For example, for an <i>account</i> entity, the fields would be <i>account name</i>, <i>account ID</i>, and so on. 
**/
export class ConnectorEntityField extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=destinationProperties" })
  destinationProperties?: DestinationFieldProperties;

  @Metadata({ data: "json, name=identifier" })
  identifier: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=sourceProperties" })
  sourceProperties?: SourceFieldProperties;

  @Metadata({ data: "json, name=supportedFieldTypeDetails" })
  supportedFieldTypeDetails?: SupportedFieldTypeDetails;
}

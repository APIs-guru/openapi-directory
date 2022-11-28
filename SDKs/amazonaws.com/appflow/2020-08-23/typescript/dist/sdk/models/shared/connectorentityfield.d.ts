import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationFieldProperties } from "./destinationfieldproperties";
import { SourceFieldProperties } from "./sourcefieldproperties";
import { SupportedFieldTypeDetails } from "./supportedfieldtypedetails";
/**
 *  Describes the data model of a connector field. For example, for an <i>account</i> entity, the fields would be <i>account name</i>, <i>account ID</i>, and so on.
**/
export declare class ConnectorEntityField extends SpeakeasyBase {
    description?: string;
    destinationProperties?: DestinationFieldProperties;
    identifier: string;
    label?: string;
    sourceProperties?: SourceFieldProperties;
    supportedFieldTypeDetails?: SupportedFieldTypeDetails;
}

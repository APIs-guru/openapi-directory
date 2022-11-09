import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorHandlingConfig } from "./errorhandlingconfig";
import { WriteOperationTypeEnum } from "./writeoperationtypeenum";


// ZendeskDestinationProperties
/** 
 * The properties that are applied when Zendesk is used as a destination.
**/
export class ZendeskDestinationProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorHandlingConfig" })
  errorHandlingConfig?: ErrorHandlingConfig;

  @Metadata({ data: "json, name=idFieldNames" })
  idFieldNames?: string[];

  @Metadata({ data: "json, name=object" })
  object: string;

  @Metadata({ data: "json, name=writeOperationType" })
  writeOperationType?: WriteOperationTypeEnum;
}

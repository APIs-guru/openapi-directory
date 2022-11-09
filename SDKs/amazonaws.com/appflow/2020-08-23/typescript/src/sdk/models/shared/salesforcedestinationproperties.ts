import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorHandlingConfig } from "./errorhandlingconfig";
import { WriteOperationTypeEnum } from "./writeoperationtypeenum";


// SalesforceDestinationProperties
/** 
 *  The properties that are applied when Salesforce is being used as a destination. 
**/
export class SalesforceDestinationProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorHandlingConfig" })
  errorHandlingConfig?: ErrorHandlingConfig;

  @Metadata({ data: "json, name=idFieldNames" })
  idFieldNames?: string[];

  @Metadata({ data: "json, name=object" })
  object: string;

  @Metadata({ data: "json, name=writeOperationType" })
  writeOperationType?: WriteOperationTypeEnum;
}

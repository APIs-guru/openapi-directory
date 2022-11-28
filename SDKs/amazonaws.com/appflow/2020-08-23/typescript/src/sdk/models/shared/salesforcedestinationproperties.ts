import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorHandlingConfig } from "./errorhandlingconfig";
import { WriteOperationTypeEnum } from "./writeoperationtypeenum";



// SalesforceDestinationProperties
/** 
 *  The properties that are applied when Salesforce is being used as a destination. 
**/
export class SalesforceDestinationProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorHandlingConfig" })
  errorHandlingConfig?: ErrorHandlingConfig;

  @SpeakeasyMetadata({ data: "json, name=idFieldNames" })
  idFieldNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;

  @SpeakeasyMetadata({ data: "json, name=writeOperationType" })
  writeOperationType?: WriteOperationTypeEnum;
}

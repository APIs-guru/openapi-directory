import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorHandlingConfig } from "./errorhandlingconfig";
import { WriteOperationTypeEnum } from "./writeoperationtypeenum";



// ZendeskDestinationProperties
/** 
 * The properties that are applied when Zendesk is used as a destination.
**/
export class ZendeskDestinationProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorHandlingConfig" })
  errorHandlingConfig?: ErrorHandlingConfig;

  @SpeakeasyMetadata({ data: "json, name=idFieldNames" })
  idFieldNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;

  @SpeakeasyMetadata({ data: "json, name=writeOperationType" })
  writeOperationType?: WriteOperationTypeEnum;
}

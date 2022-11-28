import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WriteOperationTypeEnum } from "./writeoperationtypeenum";



// DestinationFieldProperties
/** 
 *  The properties that can be applied to a field when connector is being used as a destination. 
**/
export class DestinationFieldProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isCreatable" })
  isCreatable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isNullable" })
  isNullable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isUpdatable" })
  isUpdatable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isUpsertable" })
  isUpsertable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportedWriteOperations" })
  supportedWriteOperations?: WriteOperationTypeEnum[];
}

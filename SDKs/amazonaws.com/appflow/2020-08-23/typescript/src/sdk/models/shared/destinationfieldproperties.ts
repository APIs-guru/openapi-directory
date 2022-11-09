import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WriteOperationTypeEnum } from "./writeoperationtypeenum";


// DestinationFieldProperties
/** 
 *  The properties that can be applied to a field when connector is being used as a destination. 
**/
export class DestinationFieldProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=isCreatable" })
  isCreatable?: boolean;

  @Metadata({ data: "json, name=isNullable" })
  isNullable?: boolean;

  @Metadata({ data: "json, name=isUpdatable" })
  isUpdatable?: boolean;

  @Metadata({ data: "json, name=isUpsertable" })
  isUpsertable?: boolean;

  @Metadata({ data: "json, name=supportedWriteOperations" })
  supportedWriteOperations?: WriteOperationTypeEnum[];
}

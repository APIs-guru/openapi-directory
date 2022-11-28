import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";



// BatchStatementRequest
/** 
 *  A PartiQL batch statement request. 
**/
export class BatchStatementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsistentRead" })
  consistentRead?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Parameters", elemType: AttributeValue })
  parameters?: AttributeValue[];

  @SpeakeasyMetadata({ data: "json, name=Statement" })
  statement: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";


// BatchStatementRequest
/** 
 *  A PartiQL batch statement request. 
**/
export class BatchStatementRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsistentRead" })
  consistentRead?: boolean;

  @Metadata({ data: "json, name=Parameters", elemType: shared.AttributeValue })
  parameters?: AttributeValue[];

  @Metadata({ data: "json, name=Statement" })
  statement: string;
}

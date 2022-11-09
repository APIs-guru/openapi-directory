import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";


// ParameterizedStatement
/** 
 *  Represents a PartiQL statment that uses parameters. 
**/
export class ParameterizedStatement extends SpeakeasyBase {
  @Metadata({ data: "json, name=Parameters", elemType: shared.AttributeValue })
  parameters?: AttributeValue[];

  @Metadata({ data: "json, name=Statement" })
  statement: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";



// ParameterizedStatement
/** 
 *  Represents a PartiQL statment that uses parameters. 
**/
export class ParameterizedStatement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Parameters", elemType: AttributeValue })
  parameters?: AttributeValue[];

  @SpeakeasyMetadata({ data: "json, name=Statement" })
  statement: string;
}

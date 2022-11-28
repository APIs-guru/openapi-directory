import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";



export class ExecuteStatementInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsistentRead" })
  consistentRead?: boolean;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters", elemType: AttributeValue })
  parameters?: AttributeValue[];

  @SpeakeasyMetadata({ data: "json, name=Statement" })
  statement: string;
}

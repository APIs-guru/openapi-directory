import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";


export class ExecuteStatementInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsistentRead" })
  consistentRead?: boolean;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Parameters", elemType: shared.AttributeValue })
  parameters?: AttributeValue[];

  @Metadata({ data: "json, name=Statement" })
  statement: string;
}

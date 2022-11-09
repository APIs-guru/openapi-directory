import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";


export class ExecuteStatementOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.AttributeValue, elemDepth: 2 })
  items?: Map<string, AttributeValue>[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

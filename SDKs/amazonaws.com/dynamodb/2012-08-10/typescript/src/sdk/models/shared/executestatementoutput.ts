import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";



export class ExecuteStatementOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: AttributeValue, elemDepth: 2 })
  items?: Map<string, AttributeValue>[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

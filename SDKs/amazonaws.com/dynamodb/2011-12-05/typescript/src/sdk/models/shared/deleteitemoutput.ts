import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";


export class DeleteItemOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes", elemType: shared.AttributeValue })
  attributes?: Map<string, AttributeValue>;

  @Metadata({ data: "json, name=ConsumedCapacityUnits" })
  consumedCapacityUnits?: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";


export class Condition extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeValueList", elemType: shared.AttributeValue })
  attributeValueList?: AttributeValue[];

  @Metadata({ data: "json, name=ComparisonOperator" })
  comparisonOperator: ComparisonOperatorEnum;
}

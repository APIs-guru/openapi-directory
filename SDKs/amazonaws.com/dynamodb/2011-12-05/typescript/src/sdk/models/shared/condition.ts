import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";



export class Condition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeValueList", elemType: AttributeValue })
  attributeValueList?: AttributeValue[];

  @SpeakeasyMetadata({ data: "json, name=ComparisonOperator" })
  comparisonOperator: ComparisonOperatorEnum;
}

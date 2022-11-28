import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
export declare class Condition extends SpeakeasyBase {
    attributeValueList?: AttributeValue[];
    comparisonOperator: ComparisonOperatorEnum;
}

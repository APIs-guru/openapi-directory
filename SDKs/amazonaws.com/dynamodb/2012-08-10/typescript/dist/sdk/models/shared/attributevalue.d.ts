import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
**/
export declare class AttributeValue extends SpeakeasyBase {
    b?: string;
    bool?: boolean;
    bs?: string[];
    l?: AttributeValue[];
    m?: Map<string, AttributeValue>;
    n?: string;
    ns?: string[];
    null?: boolean;
    s?: string;
    ss?: string[];
}

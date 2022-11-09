import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";


// Condition
/** 
 * <p>Represents the selection criteria for a <code>Query</code> or <code>Scan</code> operation:</p> <ul> <li> <p>For a <code>Query</code> operation, <code>Condition</code> is used for specifying the <code>KeyConditions</code> to use when querying a table or an index. For <code>KeyConditions</code>, only the following comparison operators are supported:</p> <p> <code>EQ | LE | LT | GE | GT | BEGINS_WITH | BETWEEN</code> </p> <p> <code>Condition</code> is also used in a <code>QueryFilter</code>, which evaluates the query results and returns only the desired values.</p> </li> <li> <p>For a <code>Scan</code> operation, <code>Condition</code> is used in a <code>ScanFilter</code>, which evaluates the scan results and returns only the desired values.</p> </li> </ul>
**/
export class Condition extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeValueList", elemType: shared.AttributeValue })
  attributeValueList?: AttributeValue[];

  @Metadata({ data: "json, name=ComparisonOperator" })
  comparisonOperator: ComparisonOperatorEnum;
}

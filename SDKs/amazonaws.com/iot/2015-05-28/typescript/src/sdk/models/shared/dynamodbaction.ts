import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DynamoKeyTypeEnum } from "./dynamokeytypeenum";



// DynamoDbAction
/** 
 * <p>Describes an action to write to a DynamoDB table.</p> <p>The <code>tableName</code>, <code>hashKeyField</code>, and <code>rangeKeyField</code> values must match the values used when you created the table.</p> <p>The <code>hashKeyValue</code> and <code>rangeKeyvalue</code> fields use a substitution template syntax. These templates provide data at runtime. The syntax is as follows: ${<i>sql-expression</i>}.</p> <p>You can specify any valid expression in a WHERE or SELECT clause, including JSON properties, comparisons, calculations, and functions. For example, the following field uses the third level of the topic:</p> <p> <code>"hashKeyValue": "${topic(3)}"</code> </p> <p>The following field uses the timestamp:</p> <p> <code>"rangeKeyValue": "${timestamp()}"</code> </p>
**/
export class DynamoDbAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hashKeyField" })
  hashKeyField: string;

  @SpeakeasyMetadata({ data: "json, name=hashKeyType" })
  hashKeyType?: DynamoKeyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=hashKeyValue" })
  hashKeyValue: string;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: string;

  @SpeakeasyMetadata({ data: "json, name=payloadField" })
  payloadField?: string;

  @SpeakeasyMetadata({ data: "json, name=rangeKeyField" })
  rangeKeyField?: string;

  @SpeakeasyMetadata({ data: "json, name=rangeKeyType" })
  rangeKeyType?: DynamoKeyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=rangeKeyValue" })
  rangeKeyValue?: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=tableName" })
  tableName: string;
}

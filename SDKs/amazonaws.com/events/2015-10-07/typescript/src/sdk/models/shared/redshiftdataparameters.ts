import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RedshiftDataParameters
/** 
 * These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API ExecuteStatement based on EventBridge events.
**/
export class RedshiftDataParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Database" })
  database: string;

  @SpeakeasyMetadata({ data: "json, name=DbUser" })
  dbUser?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretManagerArn" })
  secretManagerArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Sql" })
  sql: string;

  @SpeakeasyMetadata({ data: "json, name=StatementName" })
  statementName?: string;

  @SpeakeasyMetadata({ data: "json, name=WithEvent" })
  withEvent?: boolean;
}

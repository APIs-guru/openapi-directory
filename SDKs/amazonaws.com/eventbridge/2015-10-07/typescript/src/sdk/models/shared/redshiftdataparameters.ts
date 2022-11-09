import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RedshiftDataParameters
/** 
 * These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API ExecuteStatement based on EventBridge events.
**/
export class RedshiftDataParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=Database" })
  database: string;

  @Metadata({ data: "json, name=DbUser" })
  dbUser?: string;

  @Metadata({ data: "json, name=SecretManagerArn" })
  secretManagerArn?: string;

  @Metadata({ data: "json, name=Sql" })
  sql: string;

  @Metadata({ data: "json, name=StatementName" })
  statementName?: string;

  @Metadata({ data: "json, name=WithEvent" })
  withEvent?: boolean;
}

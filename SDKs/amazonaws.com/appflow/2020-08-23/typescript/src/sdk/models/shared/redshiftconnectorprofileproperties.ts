import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RedshiftConnectorProfileProperties
/** 
 *  The connector-specific profile properties when using Amazon Redshift. 
**/
export class RedshiftConnectorProfileProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName: string;

  @Metadata({ data: "json, name=bucketPrefix" })
  bucketPrefix?: string;

  @Metadata({ data: "json, name=databaseUrl" })
  databaseUrl: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;
}

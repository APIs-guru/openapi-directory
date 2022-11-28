import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RedshiftConnectorProfileProperties
/** 
 *  The connector-specific profile properties when using Amazon Redshift. 
**/
export class RedshiftConnectorProfileProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName: string;

  @SpeakeasyMetadata({ data: "json, name=bucketPrefix" })
  bucketPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=databaseUrl" })
  databaseUrl: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;
}

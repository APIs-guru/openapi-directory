import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetVaultNotificationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vaultName" })
  vaultName: string;
}


export class SetVaultNotificationsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// SetVaultNotificationsRequestBodyVaultNotificationConfig
/** 
 * Represents a vault's notification configuration.
**/
export class SetVaultNotificationsRequestBodyVaultNotificationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Events" })
  events?: string[];

  @Metadata({ data: "json, name=SNSTopic" })
  snsTopic?: string;
}


export class SetVaultNotificationsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=vaultNotificationConfig" })
  vaultNotificationConfig?: SetVaultNotificationsRequestBodyVaultNotificationConfig;
}


export class SetVaultNotificationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetVaultNotificationsPathParams;

  @Metadata()
  headers: SetVaultNotificationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SetVaultNotificationsRequestBody;
}


export class SetVaultNotificationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  missingParameterValueException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetVaultNotificationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vaultName" })
  vaultName: string;
}


export class SetVaultNotificationsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// SetVaultNotificationsRequestBodyVaultNotificationConfig
/** 
 * Represents a vault's notification configuration.
**/
export class SetVaultNotificationsRequestBodyVaultNotificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Events" })
  events?: string[];

  @SpeakeasyMetadata({ data: "json, name=SNSTopic" })
  snsTopic?: string;
}


export class SetVaultNotificationsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=vaultNotificationConfig" })
  vaultNotificationConfig?: SetVaultNotificationsRequestBodyVaultNotificationConfig;
}


export class SetVaultNotificationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetVaultNotificationsPathParams;

  @SpeakeasyMetadata()
  headers: SetVaultNotificationsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SetVaultNotificationsRequestBody;
}


export class SetVaultNotificationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  missingParameterValueException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

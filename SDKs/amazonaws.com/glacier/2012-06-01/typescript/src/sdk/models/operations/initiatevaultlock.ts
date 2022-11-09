import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InitiateVaultLockPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vaultName" })
  vaultName: string;
}


export class InitiateVaultLockHeaders extends SpeakeasyBase {
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


// InitiateVaultLockRequestBodyPolicy
/** 
 * Contains the vault lock policy.
**/
export class InitiateVaultLockRequestBodyPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=Policy" })
  policy?: string;
}


export class InitiateVaultLockRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=policy" })
  policy?: InitiateVaultLockRequestBodyPolicy;
}


export class InitiateVaultLockRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InitiateVaultLockPathParams;

  @Metadata()
  headers: InitiateVaultLockHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: InitiateVaultLockRequestBody;
}


export class InitiateVaultLockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  initiateVaultLockOutput?: Map<string, any>;

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

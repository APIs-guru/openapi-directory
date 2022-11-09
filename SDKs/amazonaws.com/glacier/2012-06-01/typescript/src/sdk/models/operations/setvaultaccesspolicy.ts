import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetVaultAccessPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vaultName" })
  vaultName: string;
}


export class SetVaultAccessPolicyHeaders extends SpeakeasyBase {
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


// SetVaultAccessPolicyRequestBodyPolicy
/** 
 * Contains the vault access policy.
**/
export class SetVaultAccessPolicyRequestBodyPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=Policy" })
  policy?: string;
}


export class SetVaultAccessPolicyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=policy" })
  policy?: SetVaultAccessPolicyRequestBodyPolicy;
}


export class SetVaultAccessPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetVaultAccessPolicyPathParams;

  @Metadata()
  headers: SetVaultAccessPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SetVaultAccessPolicyRequestBody;
}


export class SetVaultAccessPolicyResponse extends SpeakeasyBase {
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

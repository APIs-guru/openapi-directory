import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ValidatePolicyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ValidatePolicyHeaders extends SpeakeasyBase {
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

export enum ValidatePolicyRequestBodyLocaleEnum {
    De = "DE",
    En = "EN",
    Es = "ES",
    Fr = "FR",
    It = "IT",
    Ja = "JA",
    Ko = "KO",
    PtBr = "PT_BR",
    ZhCn = "ZH_CN",
    ZhTw = "ZH_TW"
}

export enum ValidatePolicyRequestBodyPolicyTypeEnum {
    IdentityPolicy = "IDENTITY_POLICY",
    ResourcePolicy = "RESOURCE_POLICY",
    ServiceControlPolicy = "SERVICE_CONTROL_POLICY"
}


export class ValidatePolicyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: ValidatePolicyRequestBodyLocaleEnum;

  @SpeakeasyMetadata({ data: "json, name=policyDocument" })
  policyDocument: string;

  @SpeakeasyMetadata({ data: "json, name=policyType" })
  policyType: ValidatePolicyRequestBodyPolicyTypeEnum;
}


export class ValidatePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ValidatePolicyQueryParams;

  @SpeakeasyMetadata()
  headers: ValidatePolicyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ValidatePolicyRequestBody;
}


export class ValidatePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validatePolicyResponse?: shared.ValidatePolicyResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}

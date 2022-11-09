import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ValidatePolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ValidatePolicyHeaders extends SpeakeasyBase {
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

export enum ValidatePolicyRequestBodyLocaleEnum {
    De = "DE"
,    En = "EN"
,    Es = "ES"
,    Fr = "FR"
,    It = "IT"
,    Ja = "JA"
,    Ko = "KO"
,    PtBr = "PT_BR"
,    ZhCn = "ZH_CN"
,    ZhTw = "ZH_TW"
}

export enum ValidatePolicyRequestBodyPolicyTypeEnum {
    IdentityPolicy = "IDENTITY_POLICY"
,    ResourcePolicy = "RESOURCE_POLICY"
,    ServiceControlPolicy = "SERVICE_CONTROL_POLICY"
}


export class ValidatePolicyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=locale" })
  locale?: ValidatePolicyRequestBodyLocaleEnum;

  @Metadata({ data: "json, name=policyDocument" })
  policyDocument: string;

  @Metadata({ data: "json, name=policyType" })
  policyType: ValidatePolicyRequestBodyPolicyTypeEnum;
}


export class ValidatePolicyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ValidatePolicyQueryParams;

  @Metadata()
  headers: ValidatePolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ValidatePolicyRequestBody;
}


export class ValidatePolicyResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validatePolicyResponse?: shared.ValidatePolicyResponse;

  @Metadata()
  validationException?: any;
}

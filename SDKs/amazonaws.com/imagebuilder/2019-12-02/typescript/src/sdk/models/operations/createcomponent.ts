import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateComponentHeaders extends SpeakeasyBase {
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

export enum CreateComponentRequestBodyPlatformEnum {
    Windows = "Windows"
,    Linux = "Linux"
}


export class CreateComponentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=changeDescription" })
  changeDescription?: string;

  @Metadata({ data: "json, name=clientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=platform" })
  platform: CreateComponentRequestBodyPlatformEnum;

  @Metadata({ data: "json, name=semanticVersion" })
  semanticVersion: string;

  @Metadata({ data: "json, name=supportedOsVersions" })
  supportedOsVersions?: string[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


export class CreateComponentRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateComponentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateComponentRequestBody;
}


export class CreateComponentResponse extends SpeakeasyBase {
  @Metadata()
  callRateLimitExceededException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createComponentResponse?: shared.CreateComponentResponse;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  invalidParameterCombinationException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  invalidVersionNumberException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}

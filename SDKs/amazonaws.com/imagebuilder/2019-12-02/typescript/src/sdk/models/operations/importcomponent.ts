import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImportComponentHeaders extends SpeakeasyBase {
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

export enum ImportComponentRequestBodyFormatEnum {
    Shell = "SHELL"
}

export enum ImportComponentRequestBodyPlatformEnum {
    Windows = "Windows"
,    Linux = "Linux"
}

export enum ImportComponentRequestBodyTypeEnum {
    Build = "BUILD"
,    Test = "TEST"
}


export class ImportComponentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=changeDescription" })
  changeDescription?: string;

  @Metadata({ data: "json, name=clientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=format" })
  format: ImportComponentRequestBodyFormatEnum;

  @Metadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=platform" })
  platform: ImportComponentRequestBodyPlatformEnum;

  @Metadata({ data: "json, name=semanticVersion" })
  semanticVersion: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type: ImportComponentRequestBodyTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


export class ImportComponentRequest extends SpeakeasyBase {
  @Metadata()
  headers: ImportComponentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: ImportComponentRequestBody;
}


export class ImportComponentResponse extends SpeakeasyBase {
  @Metadata()
  callRateLimitExceededException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  importComponentResponse?: shared.ImportComponentResponse;

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
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}

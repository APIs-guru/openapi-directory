import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateUsagePlanKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=usageplanId" })
  usageplanId: string;
}


export class CreateUsagePlanKeyHeaders extends SpeakeasyBase {
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


export class CreateUsagePlanKeyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyId" })
  keyId: string;

  @Metadata({ data: "json, name=keyType" })
  keyType: string;
}


export class CreateUsagePlanKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateUsagePlanKeyPathParams;

  @Metadata()
  headers: CreateUsagePlanKeyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateUsagePlanKeyRequestBody;
}


export class CreateUsagePlanKeyResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;

  @Metadata()
  usagePlanKey?: shared.UsagePlanKey;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateUsagePlanKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=usageplanId" })
  usageplanId: string;
}


export class CreateUsagePlanKeyHeaders extends SpeakeasyBase {
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


export class CreateUsagePlanKeyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyId" })
  keyId: string;

  @SpeakeasyMetadata({ data: "json, name=keyType" })
  keyType: string;
}


export class CreateUsagePlanKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateUsagePlanKeyPathParams;

  @SpeakeasyMetadata()
  headers: CreateUsagePlanKeyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateUsagePlanKeyRequestBody;
}


export class CreateUsagePlanKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;

  @SpeakeasyMetadata()
  usagePlanKey?: shared.UsagePlanKey;
}

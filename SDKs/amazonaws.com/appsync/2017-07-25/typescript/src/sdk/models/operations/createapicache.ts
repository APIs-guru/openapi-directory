import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateApiCachePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class CreateApiCacheHeaders extends SpeakeasyBase {
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

export enum CreateApiCacheRequestBodyApiCachingBehaviorEnum {
    FullRequestCaching = "FULL_REQUEST_CACHING",
    PerResolverCaching = "PER_RESOLVER_CACHING"
}

export enum CreateApiCacheRequestBodyTypeEnum {
    T2Small = "T2_SMALL",
    T2Medium = "T2_MEDIUM",
    R4Large = "R4_LARGE",
    R4Xlarge = "R4_XLARGE",
    R42Xlarge = "R4_2XLARGE",
    R44Xlarge = "R4_4XLARGE",
    R48Xlarge = "R4_8XLARGE",
    Small = "SMALL",
    Medium = "MEDIUM",
    Large = "LARGE",
    Xlarge = "XLARGE",
    Large2X = "LARGE_2X",
    Large4X = "LARGE_4X",
    Large8X = "LARGE_8X",
    Large12X = "LARGE_12X"
}


export class CreateApiCacheRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiCachingBehavior" })
  apiCachingBehavior: CreateApiCacheRequestBodyApiCachingBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=atRestEncryptionEnabled" })
  atRestEncryptionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=transitEncryptionEnabled" })
  transitEncryptionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CreateApiCacheRequestBodyTypeEnum;
}


export class CreateApiCacheRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateApiCachePathParams;

  @SpeakeasyMetadata()
  headers: CreateApiCacheHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateApiCacheRequestBody;
}


export class CreateApiCacheResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  concurrentModificationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createApiCacheResponse?: shared.CreateApiCacheResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}

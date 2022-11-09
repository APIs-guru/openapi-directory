import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateApiCachePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class CreateApiCacheHeaders extends SpeakeasyBase {
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

export enum CreateApiCacheRequestBodyApiCachingBehaviorEnum {
    FullRequestCaching = "FULL_REQUEST_CACHING"
,    PerResolverCaching = "PER_RESOLVER_CACHING"
}

export enum CreateApiCacheRequestBodyTypeEnum {
    T2Small = "T2_SMALL"
,    T2Medium = "T2_MEDIUM"
,    R4Large = "R4_LARGE"
,    R4Xlarge = "R4_XLARGE"
,    R42Xlarge = "R4_2XLARGE"
,    R44Xlarge = "R4_4XLARGE"
,    R48Xlarge = "R4_8XLARGE"
,    Small = "SMALL"
,    Medium = "MEDIUM"
,    Large = "LARGE"
,    Xlarge = "XLARGE"
,    Large2X = "LARGE_2X"
,    Large4X = "LARGE_4X"
,    Large8X = "LARGE_8X"
,    Large12X = "LARGE_12X"
}


export class CreateApiCacheRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiCachingBehavior" })
  apiCachingBehavior: CreateApiCacheRequestBodyApiCachingBehaviorEnum;

  @Metadata({ data: "json, name=atRestEncryptionEnabled" })
  atRestEncryptionEnabled?: boolean;

  @Metadata({ data: "json, name=transitEncryptionEnabled" })
  transitEncryptionEnabled?: boolean;

  @Metadata({ data: "json, name=ttl" })
  ttl: number;

  @Metadata({ data: "json, name=type" })
  type: CreateApiCacheRequestBodyTypeEnum;
}


export class CreateApiCacheRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateApiCachePathParams;

  @Metadata()
  headers: CreateApiCacheHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateApiCacheRequestBody;
}


export class CreateApiCacheResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createApiCacheResponse?: shared.CreateApiCacheResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;
}

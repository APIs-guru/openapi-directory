import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutAccountPreferencesHeaders extends SpeakeasyBase {
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

export enum PutAccountPreferencesRequestBodyResourceIdTypeEnum {
    LongId = "LONG_ID"
,    ShortId = "SHORT_ID"
}


export class PutAccountPreferencesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceIdType" })
  resourceIdType: PutAccountPreferencesRequestBodyResourceIdTypeEnum;
}


export class PutAccountPreferencesRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutAccountPreferencesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutAccountPreferencesRequestBody;
}


export class PutAccountPreferencesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  putAccountPreferencesResponse?: shared.PutAccountPreferencesResponse;

  @Metadata()
  statusCode: number;
}

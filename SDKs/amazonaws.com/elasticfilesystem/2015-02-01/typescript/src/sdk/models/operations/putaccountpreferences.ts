import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutAccountPreferencesHeaders extends SpeakeasyBase {
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

export enum PutAccountPreferencesRequestBodyResourceIdTypeEnum {
    LongId = "LONG_ID",
    ShortId = "SHORT_ID"
}


export class PutAccountPreferencesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceIdType" })
  resourceIdType: PutAccountPreferencesRequestBodyResourceIdTypeEnum;
}


export class PutAccountPreferencesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutAccountPreferencesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutAccountPreferencesRequestBody;
}


export class PutAccountPreferencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  putAccountPreferencesResponse?: shared.PutAccountPreferencesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

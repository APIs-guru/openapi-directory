import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostUpdateConfigurationSetSendingEnabledActionEnum {
    UpdateConfigurationSetSendingEnabled = "UpdateConfigurationSetSendingEnabled"
}

export enum PostUpdateConfigurationSetSendingEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostUpdateConfigurationSetSendingEnabledQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostUpdateConfigurationSetSendingEnabledActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostUpdateConfigurationSetSendingEnabledVersionEnum;
}


export class PostUpdateConfigurationSetSendingEnabledHeaders extends SpeakeasyBase {
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


export class PostUpdateConfigurationSetSendingEnabledRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostUpdateConfigurationSetSendingEnabledQueryParams;

  @Metadata()
  headers: PostUpdateConfigurationSetSendingEnabledHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostUpdateConfigurationSetSendingEnabledResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

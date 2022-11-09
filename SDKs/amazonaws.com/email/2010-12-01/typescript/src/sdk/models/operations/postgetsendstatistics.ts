import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostGetSendStatisticsActionEnum {
    GetSendStatistics = "GetSendStatistics"
}

export enum PostGetSendStatisticsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostGetSendStatisticsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetSendStatisticsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetSendStatisticsVersionEnum;
}


export class PostGetSendStatisticsHeaders extends SpeakeasyBase {
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


export class PostGetSendStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostGetSendStatisticsQueryParams;

  @Metadata()
  headers: PostGetSendStatisticsHeaders;
}


export class PostGetSendStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

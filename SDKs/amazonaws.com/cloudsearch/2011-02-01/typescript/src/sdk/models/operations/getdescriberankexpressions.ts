import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeRankExpressionsActionEnum {
    DescribeRankExpressions = "DescribeRankExpressions"
}

export enum GetDescribeRankExpressionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}


export class GetDescribeRankExpressionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeRankExpressionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RankNames" })
  rankNames?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeRankExpressionsVersionEnum;
}


export class GetDescribeRankExpressionsHeaders extends SpeakeasyBase {
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


export class GetDescribeRankExpressionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeRankExpressionsQueryParams;

  @Metadata()
  headers: GetDescribeRankExpressionsHeaders;
}


export class GetDescribeRankExpressionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

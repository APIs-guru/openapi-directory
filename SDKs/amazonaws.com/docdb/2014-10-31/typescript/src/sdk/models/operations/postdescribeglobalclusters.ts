import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDescribeGlobalClustersActionEnum {
    DescribeGlobalClusters = "DescribeGlobalClusters"
}

export enum PostDescribeGlobalClustersVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class PostDescribeGlobalClustersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDescribeGlobalClustersActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDescribeGlobalClustersVersionEnum;
}


export class PostDescribeGlobalClustersHeaders extends SpeakeasyBase {
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


export class PostDescribeGlobalClustersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDescribeGlobalClustersQueryParams;

  @Metadata()
  headers: PostDescribeGlobalClustersHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDescribeGlobalClustersResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

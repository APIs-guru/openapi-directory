import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeMetricCollectionTypesActionEnum {
    DescribeMetricCollectionTypes = "DescribeMetricCollectionTypes"
}

export enum GetDescribeMetricCollectionTypesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetDescribeMetricCollectionTypesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeMetricCollectionTypesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeMetricCollectionTypesVersionEnum;
}


export class GetDescribeMetricCollectionTypesHeaders extends SpeakeasyBase {
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


export class GetDescribeMetricCollectionTypesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeMetricCollectionTypesQueryParams;

  @Metadata()
  headers: GetDescribeMetricCollectionTypesHeaders;
}


export class GetDescribeMetricCollectionTypesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

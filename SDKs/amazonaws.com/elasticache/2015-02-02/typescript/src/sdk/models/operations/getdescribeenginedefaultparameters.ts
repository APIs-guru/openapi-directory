import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeEngineDefaultParametersActionEnum {
    DescribeEngineDefaultParameters = "DescribeEngineDefaultParameters"
}

export enum GetDescribeEngineDefaultParametersVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetDescribeEngineDefaultParametersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeEngineDefaultParametersActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CacheParameterGroupFamily" })
  cacheParameterGroupFamily: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeEngineDefaultParametersVersionEnum;
}


export class GetDescribeEngineDefaultParametersHeaders extends SpeakeasyBase {
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


export class GetDescribeEngineDefaultParametersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeEngineDefaultParametersQueryParams;

  @Metadata()
  headers: GetDescribeEngineDefaultParametersHeaders;
}


export class GetDescribeEngineDefaultParametersResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

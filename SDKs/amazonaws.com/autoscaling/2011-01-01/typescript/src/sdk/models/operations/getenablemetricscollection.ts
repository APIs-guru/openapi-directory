import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetEnableMetricsCollectionActionEnum {
    EnableMetricsCollection = "EnableMetricsCollection"
}

export enum GetEnableMetricsCollectionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetEnableMetricsCollectionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetEnableMetricsCollectionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Granularity" })
  granularity: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Metrics" })
  metrics?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetEnableMetricsCollectionVersionEnum;
}


export class GetEnableMetricsCollectionHeaders extends SpeakeasyBase {
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


export class GetEnableMetricsCollectionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEnableMetricsCollectionQueryParams;

  @Metadata()
  headers: GetEnableMetricsCollectionHeaders;
}


export class GetEnableMetricsCollectionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

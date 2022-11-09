import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDisableMetricsCollectionActionEnum {
    DisableMetricsCollection = "DisableMetricsCollection"
}

export enum GetDisableMetricsCollectionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetDisableMetricsCollectionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDisableMetricsCollectionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" })
  autoScalingGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Metrics" })
  metrics?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDisableMetricsCollectionVersionEnum;
}


export class GetDisableMetricsCollectionHeaders extends SpeakeasyBase {
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


export class GetDisableMetricsCollectionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDisableMetricsCollectionQueryParams;

  @Metadata()
  headers: GetDisableMetricsCollectionHeaders;
}


export class GetDisableMetricsCollectionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

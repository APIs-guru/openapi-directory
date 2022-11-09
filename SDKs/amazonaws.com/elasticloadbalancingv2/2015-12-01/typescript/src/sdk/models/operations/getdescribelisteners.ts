import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeListenersActionEnum {
    DescribeListeners = "DescribeListeners"
}

export enum GetDescribeListenersVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}


export class GetDescribeListenersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeListenersActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ListenerArns" })
  listenerArns?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=LoadBalancerArn" })
  loadBalancerArn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeListenersVersionEnum;
}


export class GetDescribeListenersHeaders extends SpeakeasyBase {
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


export class GetDescribeListenersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeListenersQueryParams;

  @Metadata()
  headers: GetDescribeListenersHeaders;
}


export class GetDescribeListenersResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

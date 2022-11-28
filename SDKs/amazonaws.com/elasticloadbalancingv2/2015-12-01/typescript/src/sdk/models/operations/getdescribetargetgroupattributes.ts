import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeTargetGroupAttributesActionEnum {
    DescribeTargetGroupAttributes = "DescribeTargetGroupAttributes"
}

export enum GetDescribeTargetGroupAttributesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}


export class GetDescribeTargetGroupAttributesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeTargetGroupAttributesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TargetGroupArn" })
  targetGroupArn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeTargetGroupAttributesVersionEnum;
}


export class GetDescribeTargetGroupAttributesHeaders extends SpeakeasyBase {
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


export class GetDescribeTargetGroupAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeTargetGroupAttributesQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeTargetGroupAttributesHeaders;
}


export class GetDescribeTargetGroupAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

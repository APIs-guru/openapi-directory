import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeAutoScalingNotificationTypesActionEnum {
    DescribeAutoScalingNotificationTypes = "DescribeAutoScalingNotificationTypes"
}

export enum GetDescribeAutoScalingNotificationTypesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetDescribeAutoScalingNotificationTypesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeAutoScalingNotificationTypesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeAutoScalingNotificationTypesVersionEnum;
}


export class GetDescribeAutoScalingNotificationTypesHeaders extends SpeakeasyBase {
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


export class GetDescribeAutoScalingNotificationTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeAutoScalingNotificationTypesQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeAutoScalingNotificationTypesHeaders;
}


export class GetDescribeAutoScalingNotificationTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

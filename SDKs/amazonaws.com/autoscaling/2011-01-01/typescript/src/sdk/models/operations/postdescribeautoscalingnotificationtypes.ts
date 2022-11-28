import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDescribeAutoScalingNotificationTypesActionEnum {
    DescribeAutoScalingNotificationTypes = "DescribeAutoScalingNotificationTypes"
}

export enum PostDescribeAutoScalingNotificationTypesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class PostDescribeAutoScalingNotificationTypesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDescribeAutoScalingNotificationTypesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDescribeAutoScalingNotificationTypesVersionEnum;
}


export class PostDescribeAutoScalingNotificationTypesHeaders extends SpeakeasyBase {
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


export class PostDescribeAutoScalingNotificationTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostDescribeAutoScalingNotificationTypesQueryParams;

  @SpeakeasyMetadata()
  headers: PostDescribeAutoScalingNotificationTypesHeaders;
}


export class PostDescribeAutoScalingNotificationTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

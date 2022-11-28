import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeInstanceEventNotificationAttributesActionEnum {
    DescribeInstanceEventNotificationAttributes = "DescribeInstanceEventNotificationAttributes"
}

export enum GetDescribeInstanceEventNotificationAttributesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDescribeInstanceEventNotificationAttributesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeInstanceEventNotificationAttributesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeInstanceEventNotificationAttributesVersionEnum;
}


export class GetDescribeInstanceEventNotificationAttributesHeaders extends SpeakeasyBase {
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


export class GetDescribeInstanceEventNotificationAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeInstanceEventNotificationAttributesQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeInstanceEventNotificationAttributesHeaders;
}


export class GetDescribeInstanceEventNotificationAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

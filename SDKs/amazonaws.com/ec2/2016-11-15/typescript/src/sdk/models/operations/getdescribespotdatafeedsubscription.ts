import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeSpotDatafeedSubscriptionActionEnum {
    DescribeSpotDatafeedSubscription = "DescribeSpotDatafeedSubscription"
}

export enum GetDescribeSpotDatafeedSubscriptionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDescribeSpotDatafeedSubscriptionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeSpotDatafeedSubscriptionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeSpotDatafeedSubscriptionVersionEnum;
}


export class GetDescribeSpotDatafeedSubscriptionHeaders extends SpeakeasyBase {
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


export class GetDescribeSpotDatafeedSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeSpotDatafeedSubscriptionQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeSpotDatafeedSubscriptionHeaders;
}


export class GetDescribeSpotDatafeedSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

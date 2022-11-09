import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateSpotDatafeedSubscriptionActionEnum {
    CreateSpotDatafeedSubscription = "CreateSpotDatafeedSubscription"
}

export enum GetCreateSpotDatafeedSubscriptionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetCreateSpotDatafeedSubscriptionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateSpotDatafeedSubscriptionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Bucket" })
  bucket: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Prefix" })
  prefix?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateSpotDatafeedSubscriptionVersionEnum;
}


export class GetCreateSpotDatafeedSubscriptionHeaders extends SpeakeasyBase {
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


export class GetCreateSpotDatafeedSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateSpotDatafeedSubscriptionQueryParams;

  @Metadata()
  headers: GetCreateSpotDatafeedSubscriptionHeaders;
}


export class GetCreateSpotDatafeedSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

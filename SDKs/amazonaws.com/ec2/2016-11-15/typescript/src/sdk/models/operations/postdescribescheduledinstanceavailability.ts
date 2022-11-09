import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDescribeScheduledInstanceAvailabilityActionEnum {
    DescribeScheduledInstanceAvailability = "DescribeScheduledInstanceAvailability"
}

export enum PostDescribeScheduledInstanceAvailabilityVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostDescribeScheduledInstanceAvailabilityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDescribeScheduledInstanceAvailabilityActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDescribeScheduledInstanceAvailabilityVersionEnum;
}


export class PostDescribeScheduledInstanceAvailabilityHeaders extends SpeakeasyBase {
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


export class PostDescribeScheduledInstanceAvailabilityRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDescribeScheduledInstanceAvailabilityQueryParams;

  @Metadata()
  headers: PostDescribeScheduledInstanceAvailabilityHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDescribeScheduledInstanceAvailabilityResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

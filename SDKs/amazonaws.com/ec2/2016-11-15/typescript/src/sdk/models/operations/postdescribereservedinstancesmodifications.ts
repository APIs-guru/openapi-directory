import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDescribeReservedInstancesModificationsActionEnum {
    DescribeReservedInstancesModifications = "DescribeReservedInstancesModifications"
}

export enum PostDescribeReservedInstancesModificationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostDescribeReservedInstancesModificationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDescribeReservedInstancesModificationsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDescribeReservedInstancesModificationsVersionEnum;
}


export class PostDescribeReservedInstancesModificationsHeaders extends SpeakeasyBase {
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


export class PostDescribeReservedInstancesModificationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDescribeReservedInstancesModificationsQueryParams;

  @Metadata()
  headers: PostDescribeReservedInstancesModificationsHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDescribeReservedInstancesModificationsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

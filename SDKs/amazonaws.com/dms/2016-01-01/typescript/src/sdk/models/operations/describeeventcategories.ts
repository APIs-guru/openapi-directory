import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeEventCategoriesXAmzTargetEnum {
    AmazonDmSv20160101DescribeEventCategories = "AmazonDMSv20160101.DescribeEventCategories"
}


export class DescribeEventCategoriesHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DescribeEventCategoriesXAmzTargetEnum;
}


export class DescribeEventCategoriesRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeEventCategoriesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeEventCategoriesMessage;
}


export class DescribeEventCategoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeEventCategoriesResponse?: shared.DescribeEventCategoriesResponse;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeAccountAttributesXAmzTargetEnum {
    AmazonDmSv20160101DescribeAccountAttributes = "AmazonDMSv20160101.DescribeAccountAttributes"
}


export class DescribeAccountAttributesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeAccountAttributesXAmzTargetEnum;
}


export class DescribeAccountAttributesRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeAccountAttributesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class DescribeAccountAttributesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeAccountAttributesResponse?: shared.DescribeAccountAttributesResponse;

  @Metadata()
  statusCode: number;
}

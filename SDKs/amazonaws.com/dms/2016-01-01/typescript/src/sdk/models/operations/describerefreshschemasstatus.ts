import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeRefreshSchemasStatusXAmzTargetEnum {
    AmazonDmSv20160101DescribeRefreshSchemasStatus = "AmazonDMSv20160101.DescribeRefreshSchemasStatus"
}


export class DescribeRefreshSchemasStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeRefreshSchemasStatusXAmzTargetEnum;
}


export class DescribeRefreshSchemasStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeRefreshSchemasStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeRefreshSchemasStatusMessage;
}


export class DescribeRefreshSchemasStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeRefreshSchemasStatusResponse?: shared.DescribeRefreshSchemasStatusResponse;

  @Metadata()
  invalidResourceStateFault?: any;

  @Metadata()
  resourceNotFoundFault?: any;

  @Metadata()
  statusCode: number;
}

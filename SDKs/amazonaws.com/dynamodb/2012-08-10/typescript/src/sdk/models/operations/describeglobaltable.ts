import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeGlobalTableXAmzTargetEnum {
    DynamoDb20120810DescribeGlobalTable = "DynamoDB_20120810.DescribeGlobalTable"
}


export class DescribeGlobalTableHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeGlobalTableXAmzTargetEnum;
}


export class DescribeGlobalTableRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeGlobalTableHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeGlobalTableInput;
}


export class DescribeGlobalTableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeGlobalTableOutput?: shared.DescribeGlobalTableOutput;

  @Metadata()
  globalTableNotFoundException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}

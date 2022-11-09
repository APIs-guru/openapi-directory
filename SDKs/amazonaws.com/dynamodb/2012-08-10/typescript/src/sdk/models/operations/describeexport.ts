import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeExportXAmzTargetEnum {
    DynamoDb20120810DescribeExport = "DynamoDB_20120810.DescribeExport"
}


export class DescribeExportHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeExportXAmzTargetEnum;
}


export class DescribeExportRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeExportHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeExportInput;
}


export class DescribeExportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeExportOutput?: shared.DescribeExportOutput;

  @Metadata()
  exportNotFoundException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;
}

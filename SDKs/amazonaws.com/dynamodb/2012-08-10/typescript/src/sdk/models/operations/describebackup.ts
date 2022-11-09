import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeBackupXAmzTargetEnum {
    DynamoDb20120810DescribeBackup = "DynamoDB_20120810.DescribeBackup"
}


export class DescribeBackupHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeBackupXAmzTargetEnum;
}


export class DescribeBackupRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeBackupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeBackupInput;
}


export class DescribeBackupResponse extends SpeakeasyBase {
  @Metadata()
  backupNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeBackupOutput?: shared.DescribeBackupOutput;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}

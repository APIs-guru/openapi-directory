import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ExportTableToPointInTimeXAmzTargetEnum {
    DynamoDb20120810ExportTableToPointInTime = "DynamoDB_20120810.ExportTableToPointInTime"
}


export class ExportTableToPointInTimeHeaders extends SpeakeasyBase {
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
  xAmzTarget: ExportTableToPointInTimeXAmzTargetEnum;
}


export class ExportTableToPointInTimeRequest extends SpeakeasyBase {
  @Metadata()
  headers: ExportTableToPointInTimeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ExportTableToPointInTimeInput;
}


export class ExportTableToPointInTimeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  exportConflictException?: any;

  @Metadata()
  exportTableToPointInTimeOutput?: shared.ExportTableToPointInTimeOutput;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidExportTimeException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  pointInTimeRecoveryUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tableNotFoundException?: any;
}

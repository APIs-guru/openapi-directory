import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ExportTableToPointInTimeXAmzTargetEnum {
    DynamoDb20120810ExportTableToPointInTime = "DynamoDB_20120810.ExportTableToPointInTime"
}


export class ExportTableToPointInTimeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ExportTableToPointInTimeXAmzTargetEnum;
}


export class ExportTableToPointInTimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ExportTableToPointInTimeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ExportTableToPointInTimeInput;
}


export class ExportTableToPointInTimeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  exportConflictException?: any;

  @SpeakeasyMetadata()
  exportTableToPointInTimeOutput?: shared.ExportTableToPointInTimeOutput;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidExportTimeException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  pointInTimeRecoveryUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tableNotFoundException?: any;
}

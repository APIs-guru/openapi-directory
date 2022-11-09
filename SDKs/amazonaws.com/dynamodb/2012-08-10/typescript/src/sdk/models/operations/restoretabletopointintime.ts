import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RestoreTableToPointInTimeXAmzTargetEnum {
    DynamoDb20120810RestoreTableToPointInTime = "DynamoDB_20120810.RestoreTableToPointInTime"
}


export class RestoreTableToPointInTimeHeaders extends SpeakeasyBase {
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
  xAmzTarget: RestoreTableToPointInTimeXAmzTargetEnum;
}


export class RestoreTableToPointInTimeRequest extends SpeakeasyBase {
  @Metadata()
  headers: RestoreTableToPointInTimeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RestoreTableToPointInTimeInput;
}


export class RestoreTableToPointInTimeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidRestoreTimeException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  pointInTimeRecoveryUnavailableException?: any;

  @Metadata()
  restoreTableToPointInTimeOutput?: shared.RestoreTableToPointInTimeOutput;

  @Metadata()
  statusCode: number;

  @Metadata()
  tableAlreadyExistsException?: any;

  @Metadata()
  tableInUseException?: any;

  @Metadata()
  tableNotFoundException?: any;
}

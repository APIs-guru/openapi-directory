import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RestoreTableToPointInTimeXAmzTargetEnum {
    DynamoDb20120810RestoreTableToPointInTime = "DynamoDB_20120810.RestoreTableToPointInTime"
}


export class RestoreTableToPointInTimeHeaders extends SpeakeasyBase {
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
  xAmzTarget: RestoreTableToPointInTimeXAmzTargetEnum;
}


export class RestoreTableToPointInTimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RestoreTableToPointInTimeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RestoreTableToPointInTimeInput;
}


export class RestoreTableToPointInTimeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidRestoreTimeException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  pointInTimeRecoveryUnavailableException?: any;

  @SpeakeasyMetadata()
  restoreTableToPointInTimeOutput?: shared.RestoreTableToPointInTimeOutput;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tableAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  tableInUseException?: any;

  @SpeakeasyMetadata()
  tableNotFoundException?: any;
}

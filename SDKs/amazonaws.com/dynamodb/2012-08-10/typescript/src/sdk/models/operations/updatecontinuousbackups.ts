import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateContinuousBackupsXAmzTargetEnum {
    DynamoDb20120810UpdateContinuousBackups = "DynamoDB_20120810.UpdateContinuousBackups"
}


export class UpdateContinuousBackupsHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateContinuousBackupsXAmzTargetEnum;
}


export class UpdateContinuousBackupsRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateContinuousBackupsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateContinuousBackupsInput;
}


export class UpdateContinuousBackupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  continuousBackupsUnavailableException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tableNotFoundException?: any;

  @Metadata()
  updateContinuousBackupsOutput?: shared.UpdateContinuousBackupsOutput;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListBackupsXAmzTargetEnum {
    DynamoDb20120810ListBackups = "DynamoDB_20120810.ListBackups"
}


export class ListBackupsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListBackupsXAmzTargetEnum;
}


export class ListBackupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ListBackupsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListBackupsInput;
}


export class ListBackupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  listBackupsOutput?: shared.ListBackupsOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}

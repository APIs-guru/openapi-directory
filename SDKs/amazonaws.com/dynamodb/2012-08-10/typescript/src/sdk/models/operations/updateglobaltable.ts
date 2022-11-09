import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateGlobalTableXAmzTargetEnum {
    DynamoDb20120810UpdateGlobalTable = "DynamoDB_20120810.UpdateGlobalTable"
}


export class UpdateGlobalTableHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateGlobalTableXAmzTargetEnum;
}


export class UpdateGlobalTableRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateGlobalTableHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateGlobalTableInput;
}


export class UpdateGlobalTableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  globalTableNotFoundException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  replicaAlreadyExistsException?: any;

  @Metadata()
  replicaNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tableNotFoundException?: any;

  @Metadata()
  updateGlobalTableOutput?: shared.UpdateGlobalTableOutput;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeletePreparedStatementXAmzTargetEnum {
    AmazonAthenaDeletePreparedStatement = "AmazonAthena.DeletePreparedStatement"
}


export class DeletePreparedStatementHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeletePreparedStatementXAmzTargetEnum;
}


export class DeletePreparedStatementRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeletePreparedStatementHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeletePreparedStatementInput;
}


export class DeletePreparedStatementResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deletePreparedStatementOutput?: Map<string, any>;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}

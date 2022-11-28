import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetPreparedStatementXAmzTargetEnum {
    AmazonAthenaGetPreparedStatement = "AmazonAthena.GetPreparedStatement"
}


export class GetPreparedStatementHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetPreparedStatementXAmzTargetEnum;
}


export class GetPreparedStatementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetPreparedStatementHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetPreparedStatementInput;
}


export class GetPreparedStatementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPreparedStatementOutput?: shared.GetPreparedStatementOutput;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

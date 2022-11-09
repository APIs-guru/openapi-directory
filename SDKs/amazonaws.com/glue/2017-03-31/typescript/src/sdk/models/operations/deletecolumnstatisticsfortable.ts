import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteColumnStatisticsForTableXAmzTargetEnum {
    AwsGlueDeleteColumnStatisticsForTable = "AWSGlue.DeleteColumnStatisticsForTable"
}


export class DeleteColumnStatisticsForTableHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteColumnStatisticsForTableXAmzTargetEnum;
}


export class DeleteColumnStatisticsForTableRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteColumnStatisticsForTableHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteColumnStatisticsForTableRequest;
}


export class DeleteColumnStatisticsForTableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteColumnStatisticsForTableResponse?: Map<string, any>;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  glueEncryptionException?: any;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  statusCode: number;
}

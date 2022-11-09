import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateColumnStatisticsForPartitionXAmzTargetEnum {
    AwsGlueUpdateColumnStatisticsForPartition = "AWSGlue.UpdateColumnStatisticsForPartition"
}


export class UpdateColumnStatisticsForPartitionHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateColumnStatisticsForPartitionXAmzTargetEnum;
}


export class UpdateColumnStatisticsForPartitionRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateColumnStatisticsForPartitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateColumnStatisticsForPartitionRequest;
}


export class UpdateColumnStatisticsForPartitionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

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

  @Metadata()
  updateColumnStatisticsForPartitionResponse?: shared.UpdateColumnStatisticsForPartitionResponse;
}

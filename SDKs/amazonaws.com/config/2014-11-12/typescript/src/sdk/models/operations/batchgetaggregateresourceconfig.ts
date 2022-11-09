import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchGetAggregateResourceConfigXAmzTargetEnum {
    StarlingDoveServiceBatchGetAggregateResourceConfig = "StarlingDoveService.BatchGetAggregateResourceConfig"
}


export class BatchGetAggregateResourceConfigHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetAggregateResourceConfigXAmzTargetEnum;
}


export class BatchGetAggregateResourceConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchGetAggregateResourceConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetAggregateResourceConfigRequest;
}


export class BatchGetAggregateResourceConfigResponse extends SpeakeasyBase {
  @Metadata()
  batchGetAggregateResourceConfigResponse?: shared.BatchGetAggregateResourceConfigResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  noSuchConfigurationAggregatorException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}

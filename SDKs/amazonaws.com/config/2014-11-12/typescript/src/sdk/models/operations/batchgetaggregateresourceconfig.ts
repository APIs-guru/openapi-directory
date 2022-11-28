import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum BatchGetAggregateResourceConfigXAmzTargetEnum {
    StarlingDoveServiceBatchGetAggregateResourceConfig = "StarlingDoveService.BatchGetAggregateResourceConfig"
}


export class BatchGetAggregateResourceConfigHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetAggregateResourceConfigXAmzTargetEnum;
}


export class BatchGetAggregateResourceConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchGetAggregateResourceConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetAggregateResourceConfigRequest;
}


export class BatchGetAggregateResourceConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchGetAggregateResourceConfigResponse?: shared.BatchGetAggregateResourceConfigResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  noSuchConfigurationAggregatorException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}

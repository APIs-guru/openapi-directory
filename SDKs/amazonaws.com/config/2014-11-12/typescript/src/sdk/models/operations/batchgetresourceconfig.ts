import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum BatchGetResourceConfigXAmzTargetEnum {
    StarlingDoveServiceBatchGetResourceConfig = "StarlingDoveService.BatchGetResourceConfig"
}


export class BatchGetResourceConfigHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetResourceConfigXAmzTargetEnum;
}


export class BatchGetResourceConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchGetResourceConfigHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetResourceConfigRequest;
}


export class BatchGetResourceConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchGetResourceConfigResponse?: shared.BatchGetResourceConfigResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  noAvailableConfigurationRecorderException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}

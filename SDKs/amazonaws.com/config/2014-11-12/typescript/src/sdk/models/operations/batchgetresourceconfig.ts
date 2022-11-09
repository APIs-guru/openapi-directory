import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchGetResourceConfigXAmzTargetEnum {
    StarlingDoveServiceBatchGetResourceConfig = "StarlingDoveService.BatchGetResourceConfig"
}


export class BatchGetResourceConfigHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetResourceConfigXAmzTargetEnum;
}


export class BatchGetResourceConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchGetResourceConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetResourceConfigRequest;
}


export class BatchGetResourceConfigResponse extends SpeakeasyBase {
  @Metadata()
  batchGetResourceConfigResponse?: shared.BatchGetResourceConfigResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  noAvailableConfigurationRecorderException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}

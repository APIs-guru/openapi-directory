import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchDetectEntitiesXAmzTargetEnum {
    Comprehend20171127BatchDetectEntities = "Comprehend_20171127.BatchDetectEntities"
}


export class BatchDetectEntitiesHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchDetectEntitiesXAmzTargetEnum;
}


export class BatchDetectEntitiesRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchDetectEntitiesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchDetectEntitiesRequest;
}


export class BatchDetectEntitiesResponse extends SpeakeasyBase {
  @Metadata()
  batchDetectEntitiesResponse?: shared.BatchDetectEntitiesResponse;

  @Metadata()
  batchSizeLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  textSizeLimitExceededException?: any;

  @Metadata()
  unsupportedLanguageException?: any;
}

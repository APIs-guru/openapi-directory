import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DetectEntitiesXAmzTargetEnum {
    Comprehend20171127DetectEntities = "Comprehend_20171127.DetectEntities"
}


export class DetectEntitiesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DetectEntitiesXAmzTargetEnum;
}


export class DetectEntitiesRequest extends SpeakeasyBase {
  @Metadata()
  headers: DetectEntitiesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DetectEntitiesRequest;
}


export class DetectEntitiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  detectEntitiesResponse?: shared.DetectEntitiesResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  textSizeLimitExceededException?: any;

  @Metadata()
  unsupportedLanguageException?: any;
}

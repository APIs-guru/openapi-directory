import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DetectPiiEntitiesXAmzTargetEnum {
    Comprehend20171127DetectPiiEntities = "Comprehend_20171127.DetectPiiEntities"
}


export class DetectPiiEntitiesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DetectPiiEntitiesXAmzTargetEnum;
}


export class DetectPiiEntitiesRequest extends SpeakeasyBase {
  @Metadata()
  headers: DetectPiiEntitiesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DetectPiiEntitiesRequest;
}


export class DetectPiiEntitiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  detectPiiEntitiesResponse?: shared.DetectPiiEntitiesResponse;

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

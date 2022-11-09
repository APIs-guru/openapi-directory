import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ContainsPiiEntitiesXAmzTargetEnum {
    Comprehend20171127ContainsPiiEntities = "Comprehend_20171127.ContainsPiiEntities"
}


export class ContainsPiiEntitiesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ContainsPiiEntitiesXAmzTargetEnum;
}


export class ContainsPiiEntitiesRequest extends SpeakeasyBase {
  @Metadata()
  headers: ContainsPiiEntitiesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ContainsPiiEntitiesRequest;
}


export class ContainsPiiEntitiesResponse extends SpeakeasyBase {
  @Metadata()
  containsPiiEntitiesResponse?: shared.ContainsPiiEntitiesResponse;

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

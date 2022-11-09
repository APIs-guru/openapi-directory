import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RegisterEventTopicXAmzTargetEnum {
    DirectoryService20150416RegisterEventTopic = "DirectoryService_20150416.RegisterEventTopic"
}


export class RegisterEventTopicHeaders extends SpeakeasyBase {
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
  xAmzTarget: RegisterEventTopicXAmzTargetEnum;
}


export class RegisterEventTopicRequest extends SpeakeasyBase {
  @Metadata()
  headers: RegisterEventTopicHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RegisterEventTopicRequest;
}


export class RegisterEventTopicResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  entityDoesNotExistException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  registerEventTopicResult?: Map<string, any>;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;
}

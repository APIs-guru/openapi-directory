import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateRepositoryXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921CreateRepository = "AmazonEC2ContainerRegistry_V20150921.CreateRepository"
}


export class CreateRepositoryHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateRepositoryXAmzTargetEnum;
}


export class CreateRepositoryRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateRepositoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateRepositoryRequest;
}


export class CreateRepositoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createRepositoryResponse?: shared.CreateRepositoryResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidTagParameterException?: any;

  @Metadata()
  kmsException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  repositoryAlreadyExistsException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyTagsException?: any;
}

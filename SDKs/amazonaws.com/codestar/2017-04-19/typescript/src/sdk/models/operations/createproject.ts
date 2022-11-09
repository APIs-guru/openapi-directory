import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateProjectXAmzTargetEnum {
    CodeStar20170419CreateProject = "CodeStar_20170419.CreateProject"
}


export class CreateProjectHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateProjectXAmzTargetEnum;
}


export class CreateProjectRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateProjectHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateProjectRequest;
}


export class CreateProjectResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createProjectResult?: shared.CreateProjectResult;

  @Metadata()
  invalidServiceRoleException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  projectAlreadyExistsException?: any;

  @Metadata()
  projectConfigurationException?: any;

  @Metadata()
  projectCreationFailedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}

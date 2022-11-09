import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateProjectXAmzTargetEnum {
    CodeBuild20161006CreateProject = "CodeBuild_20161006.CreateProject"
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
  request: shared.CreateProjectInput;
}


export class CreateProjectResponse extends SpeakeasyBase {
  @Metadata()
  accountLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createProjectOutput?: shared.CreateProjectOutput;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateApplicationXAmzTargetEnum {
    CodeDeploy20141006CreateApplication = "CodeDeploy_20141006.CreateApplication"
}


export class CreateApplicationHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateApplicationXAmzTargetEnum;
}


export class CreateApplicationRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateApplicationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateApplicationInput;
}


export class CreateApplicationResponse extends SpeakeasyBase {
  @Metadata()
  applicationAlreadyExistsException?: any;

  @Metadata()
  applicationLimitExceededException?: any;

  @Metadata()
  applicationNameRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createApplicationOutput?: shared.CreateApplicationOutput;

  @Metadata()
  invalidApplicationNameException?: any;

  @Metadata()
  invalidComputePlatformException?: any;

  @Metadata()
  invalidTagsToAddException?: any;

  @Metadata()
  statusCode: number;
}

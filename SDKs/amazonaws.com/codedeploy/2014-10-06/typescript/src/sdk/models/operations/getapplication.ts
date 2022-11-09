import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetApplicationXAmzTargetEnum {
    CodeDeploy20141006GetApplication = "CodeDeploy_20141006.GetApplication"
}


export class GetApplicationHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetApplicationXAmzTargetEnum;
}


export class GetApplicationRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetApplicationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetApplicationInput;
}


export class GetApplicationResponse extends SpeakeasyBase {
  @Metadata()
  applicationDoesNotExistException?: any;

  @Metadata()
  applicationNameRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getApplicationOutput?: shared.GetApplicationOutput;

  @Metadata()
  invalidApplicationNameException?: any;

  @Metadata()
  statusCode: number;
}

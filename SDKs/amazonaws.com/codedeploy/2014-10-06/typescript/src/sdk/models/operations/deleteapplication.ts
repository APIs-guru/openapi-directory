import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteApplicationXAmzTargetEnum {
    CodeDeploy20141006DeleteApplication = "CodeDeploy_20141006.DeleteApplication"
}


export class DeleteApplicationHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteApplicationXAmzTargetEnum;
}


export class DeleteApplicationRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteApplicationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteApplicationInput;
}


export class DeleteApplicationResponse extends SpeakeasyBase {
  @Metadata()
  applicationNameRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidApplicationNameException?: any;

  @Metadata()
  invalidRoleException?: any;

  @Metadata()
  statusCode: number;
}

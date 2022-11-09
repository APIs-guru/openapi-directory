import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RegisterApplicationRevisionXAmzTargetEnum {
    CodeDeploy20141006RegisterApplicationRevision = "CodeDeploy_20141006.RegisterApplicationRevision"
}


export class RegisterApplicationRevisionHeaders extends SpeakeasyBase {
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
  xAmzTarget: RegisterApplicationRevisionXAmzTargetEnum;
}


export class RegisterApplicationRevisionRequest extends SpeakeasyBase {
  @Metadata()
  headers: RegisterApplicationRevisionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RegisterApplicationRevisionInput;
}


export class RegisterApplicationRevisionResponse extends SpeakeasyBase {
  @Metadata()
  applicationDoesNotExistException?: any;

  @Metadata()
  applicationNameRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  descriptionTooLongException?: any;

  @Metadata()
  invalidApplicationNameException?: any;

  @Metadata()
  invalidRevisionException?: any;

  @Metadata()
  revisionRequiredException?: any;

  @Metadata()
  statusCode: number;
}

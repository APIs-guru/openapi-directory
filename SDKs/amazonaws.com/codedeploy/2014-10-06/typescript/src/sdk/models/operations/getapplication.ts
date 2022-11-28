import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetApplicationXAmzTargetEnum {
    CodeDeploy20141006GetApplication = "CodeDeploy_20141006.GetApplication"
}


export class GetApplicationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetApplicationXAmzTargetEnum;
}


export class GetApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetApplicationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetApplicationInput;
}


export class GetApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationDoesNotExistException?: any;

  @SpeakeasyMetadata()
  applicationNameRequiredException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getApplicationOutput?: shared.GetApplicationOutput;

  @SpeakeasyMetadata()
  invalidApplicationNameException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutFileSystemPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FileSystemId" })
  fileSystemId: string;
}


export class PutFileSystemPolicyHeaders extends SpeakeasyBase {
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
}


export class PutFileSystemPolicyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BypassPolicyLockoutSafetyCheck" })
  bypassPolicyLockoutSafetyCheck?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy: string;
}


export class PutFileSystemPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutFileSystemPolicyPathParams;

  @SpeakeasyMetadata()
  headers: PutFileSystemPolicyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutFileSystemPolicyRequestBody;
}


export class PutFileSystemPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileSystemNotFound?: any;

  @SpeakeasyMetadata()
  fileSystemPolicyDescription?: shared.FileSystemPolicyDescription;

  @SpeakeasyMetadata()
  incorrectFileSystemLifeCycleState?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidPolicyException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

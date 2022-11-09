import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutLifecycleConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FileSystemId" })
  fileSystemId: string;
}


export class PutLifecycleConfigurationHeaders extends SpeakeasyBase {
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
}


export class PutLifecycleConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=LifecyclePolicies", elemType: shared.LifecyclePolicy })
  lifecyclePolicies: shared.LifecyclePolicy[];
}


export class PutLifecycleConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutLifecycleConfigurationPathParams;

  @Metadata()
  headers: PutLifecycleConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutLifecycleConfigurationRequestBody;
}


export class PutLifecycleConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  badRequest?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  fileSystemNotFound?: any;

  @Metadata()
  incorrectFileSystemLifeCycleState?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  lifecycleConfigurationDescription?: shared.LifecycleConfigurationDescription;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateBasePathMappingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=base_path" })
  basePath: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=domain_name" })
  domainName: string;
}


export class UpdateBasePathMappingHeaders extends SpeakeasyBase {
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


export class UpdateBasePathMappingRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=patchOperations", elemType: shared.PatchOperation })
  patchOperations?: shared.PatchOperation[];
}


export class UpdateBasePathMappingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateBasePathMappingPathParams;

  @Metadata()
  headers: UpdateBasePathMappingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateBasePathMappingRequestBody;
}


export class UpdateBasePathMappingResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  basePathMapping?: shared.BasePathMapping;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;
}

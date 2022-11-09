import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCoreDefinitionVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CoreDefinitionId" })
  coreDefinitionId: string;
}


export class CreateCoreDefinitionVersionHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" })
  xAmznClientToken?: string;
}


export class CreateCoreDefinitionVersionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Cores", elemType: shared.Core })
  cores?: shared.Core[];
}


export class CreateCoreDefinitionVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateCoreDefinitionVersionPathParams;

  @Metadata()
  headers: CreateCoreDefinitionVersionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateCoreDefinitionVersionRequestBody;
}


export class CreateCoreDefinitionVersionResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createCoreDefinitionVersionResponse?: shared.CreateCoreDefinitionVersionResponse;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCoreDefinitionHeaders extends SpeakeasyBase {
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


// CreateCoreDefinitionRequestBodyInitialVersion
/** 
 * Information about a core definition version.
**/
export class CreateCoreDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=Cores", elemType: shared.Core })
  cores?: shared.Core[];
}


export class CreateCoreDefinitionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=InitialVersion" })
  initialVersion?: CreateCoreDefinitionRequestBodyInitialVersion;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateCoreDefinitionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateCoreDefinitionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateCoreDefinitionRequestBody;
}


export class CreateCoreDefinitionResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createCoreDefinitionResponse?: shared.CreateCoreDefinitionResponse;

  @Metadata()
  statusCode: number;
}

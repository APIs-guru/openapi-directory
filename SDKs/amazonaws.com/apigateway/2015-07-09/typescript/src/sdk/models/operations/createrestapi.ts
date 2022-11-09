import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateRestApiHeaders extends SpeakeasyBase {
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

export enum CreateRestApiRequestBodyApiKeySourceEnum {
    Header = "HEADER"
,    Authorizer = "AUTHORIZER"
}


// CreateRestApiRequestBodyEndpointConfiguration
/** 
 * The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. 
**/
export class CreateRestApiRequestBodyEndpointConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=types" })
  types?: shared.EndpointTypeEnum[];

  @Metadata({ data: "json, name=vpcEndpointIds" })
  vpcEndpointIds?: string[];
}


export class CreateRestApiRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKeySource" })
  apiKeySource?: CreateRestApiRequestBodyApiKeySourceEnum;

  @Metadata({ data: "json, name=binaryMediaTypes" })
  binaryMediaTypes?: string[];

  @Metadata({ data: "json, name=cloneFrom" })
  cloneFrom?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=disableExecuteApiEndpoint" })
  disableExecuteApiEndpoint?: boolean;

  @Metadata({ data: "json, name=endpointConfiguration" })
  endpointConfiguration?: CreateRestApiRequestBodyEndpointConfiguration;

  @Metadata({ data: "json, name=minimumCompressionSize" })
  minimumCompressionSize?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=policy" })
  policy?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=version" })
  version?: string;
}


export class CreateRestApiRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateRestApiHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateRestApiRequestBody;
}


export class CreateRestApiResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  restApi?: shared.RestApi;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateRestApiHeaders extends SpeakeasyBase {
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

export enum CreateRestApiRequestBodyApiKeySourceEnum {
    Header = "HEADER",
    Authorizer = "AUTHORIZER"
}


// CreateRestApiRequestBodyEndpointConfiguration
/** 
 * The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. 
**/
export class CreateRestApiRequestBodyEndpointConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=types" })
  types?: shared.EndpointTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=vpcEndpointIds" })
  vpcEndpointIds?: string[];
}


export class CreateRestApiRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKeySource" })
  apiKeySource?: CreateRestApiRequestBodyApiKeySourceEnum;

  @SpeakeasyMetadata({ data: "json, name=binaryMediaTypes" })
  binaryMediaTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=cloneFrom" })
  cloneFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disableExecuteApiEndpoint" })
  disableExecuteApiEndpoint?: boolean;

  @SpeakeasyMetadata({ data: "json, name=endpointConfiguration" })
  endpointConfiguration?: CreateRestApiRequestBodyEndpointConfiguration;

  @SpeakeasyMetadata({ data: "json, name=minimumCompressionSize" })
  minimumCompressionSize?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


export class CreateRestApiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateRestApiHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateRestApiRequestBody;
}


export class CreateRestApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  restApi?: shared.RestApi;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}

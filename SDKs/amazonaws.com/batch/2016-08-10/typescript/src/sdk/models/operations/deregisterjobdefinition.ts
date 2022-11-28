import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterJobDefinitionHeaders extends SpeakeasyBase {
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


export class DeregisterJobDefinitionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobDefinition" })
  jobDefinition: string;
}


export class DeregisterJobDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeregisterJobDefinitionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DeregisterJobDefinitionRequestBody;
}


export class DeregisterJobDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deregisterJobDefinitionResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  serverException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

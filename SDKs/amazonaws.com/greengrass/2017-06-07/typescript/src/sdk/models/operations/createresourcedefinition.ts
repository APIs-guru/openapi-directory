import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateResourceDefinitionHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" })
  xAmznClientToken?: string;
}


// CreateResourceDefinitionRequestBodyInitialVersion
/** 
 * Information about a resource definition version.
**/
export class CreateResourceDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Resources", elemType: shared.Resource })
  resources?: shared.Resource[];
}


export class CreateResourceDefinitionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InitialVersion" })
  initialVersion?: CreateResourceDefinitionRequestBodyInitialVersion;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateResourceDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateResourceDefinitionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateResourceDefinitionRequestBody;
}


export class CreateResourceDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createResourceDefinitionResponse?: shared.CreateResourceDefinitionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

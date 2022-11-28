import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateCoreDefinitionVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CoreDefinitionId" })
  coreDefinitionId: string;
}


export class CreateCoreDefinitionVersionHeaders extends SpeakeasyBase {
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


export class CreateCoreDefinitionVersionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Cores", elemType: shared.Core })
  cores?: shared.Core[];
}


export class CreateCoreDefinitionVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateCoreDefinitionVersionPathParams;

  @SpeakeasyMetadata()
  headers: CreateCoreDefinitionVersionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateCoreDefinitionVersionRequestBody;
}


export class CreateCoreDefinitionVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createCoreDefinitionVersionResponse?: shared.CreateCoreDefinitionVersionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

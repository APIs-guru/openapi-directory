import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteConnectorProfileHeaders extends SpeakeasyBase {
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


export class DeleteConnectorProfileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorProfileName" })
  connectorProfileName: string;

  @Metadata({ data: "json, name=forceDelete" })
  forceDelete?: boolean;
}


export class DeleteConnectorProfileRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteConnectorProfileHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeleteConnectorProfileRequestBody;
}


export class DeleteConnectorProfileResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteConnectorProfileResponse?: Map<string, any>;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}

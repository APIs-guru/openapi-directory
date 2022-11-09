import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDataflowEndpointGroupHeaders extends SpeakeasyBase {
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


export class CreateDataflowEndpointGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpointDetails", elemType: shared.EndpointDetails })
  endpointDetails: shared.EndpointDetails[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateDataflowEndpointGroupRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDataflowEndpointGroupHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDataflowEndpointGroupRequestBody;
}


export class CreateDataflowEndpointGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataflowEndpointGroupIdResponse?: shared.DataflowEndpointGroupIdResponse;

  @Metadata()
  dependencyException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListCustomRoutingPortMappingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListCustomRoutingPortMappingsXAmzTargetEnum {
    GlobalAcceleratorV20180706ListCustomRoutingPortMappings = "GlobalAccelerator_V20180706.ListCustomRoutingPortMappings"
}


export class ListCustomRoutingPortMappingsHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListCustomRoutingPortMappingsXAmzTargetEnum;
}


export class ListCustomRoutingPortMappingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListCustomRoutingPortMappingsQueryParams;

  @Metadata()
  headers: ListCustomRoutingPortMappingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListCustomRoutingPortMappingsRequest;
}


export class ListCustomRoutingPortMappingsResponse extends SpeakeasyBase {
  @Metadata()
  acceleratorNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  endpointGroupNotFoundException?: any;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listCustomRoutingPortMappingsResponse?: shared.ListCustomRoutingPortMappingsResponse;

  @Metadata()
  statusCode: number;
}

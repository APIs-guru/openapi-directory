import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListCustomRoutingPortMappingsByDestinationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListCustomRoutingPortMappingsByDestinationXAmzTargetEnum {
    GlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestination = "GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination"
}


export class ListCustomRoutingPortMappingsByDestinationHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListCustomRoutingPortMappingsByDestinationXAmzTargetEnum;
}


export class ListCustomRoutingPortMappingsByDestinationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListCustomRoutingPortMappingsByDestinationQueryParams;

  @Metadata()
  headers: ListCustomRoutingPortMappingsByDestinationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListCustomRoutingPortMappingsByDestinationRequest;
}


export class ListCustomRoutingPortMappingsByDestinationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  endpointNotFoundException?: any;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listCustomRoutingPortMappingsByDestinationResponse?: shared.ListCustomRoutingPortMappingsByDestinationResponse;

  @Metadata()
  statusCode: number;
}

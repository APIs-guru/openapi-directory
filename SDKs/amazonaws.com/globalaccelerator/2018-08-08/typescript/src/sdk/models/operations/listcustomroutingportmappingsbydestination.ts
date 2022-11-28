import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListCustomRoutingPortMappingsByDestinationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListCustomRoutingPortMappingsByDestinationXAmzTargetEnum {
    GlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestination = "GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination"
}


export class ListCustomRoutingPortMappingsByDestinationHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListCustomRoutingPortMappingsByDestinationXAmzTargetEnum;
}


export class ListCustomRoutingPortMappingsByDestinationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListCustomRoutingPortMappingsByDestinationQueryParams;

  @SpeakeasyMetadata()
  headers: ListCustomRoutingPortMappingsByDestinationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListCustomRoutingPortMappingsByDestinationRequest;
}


export class ListCustomRoutingPortMappingsByDestinationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  endpointNotFoundException?: any;

  @SpeakeasyMetadata()
  internalServiceErrorException?: any;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  @SpeakeasyMetadata()
  listCustomRoutingPortMappingsByDestinationResponse?: shared.ListCustomRoutingPortMappingsByDestinationResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListCustomRoutingPortMappingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListCustomRoutingPortMappingsXAmzTargetEnum {
    GlobalAcceleratorV20180706ListCustomRoutingPortMappings = "GlobalAccelerator_V20180706.ListCustomRoutingPortMappings"
}


export class ListCustomRoutingPortMappingsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListCustomRoutingPortMappingsXAmzTargetEnum;
}


export class ListCustomRoutingPortMappingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListCustomRoutingPortMappingsQueryParams;

  @SpeakeasyMetadata()
  headers: ListCustomRoutingPortMappingsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListCustomRoutingPortMappingsRequest;
}


export class ListCustomRoutingPortMappingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceleratorNotFoundException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  endpointGroupNotFoundException?: any;

  @SpeakeasyMetadata()
  internalServiceErrorException?: any;

  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  @SpeakeasyMetadata()
  listCustomRoutingPortMappingsResponse?: shared.ListCustomRoutingPortMappingsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

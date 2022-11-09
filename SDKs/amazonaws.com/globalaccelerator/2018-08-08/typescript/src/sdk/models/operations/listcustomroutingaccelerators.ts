import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListCustomRoutingAcceleratorsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListCustomRoutingAcceleratorsXAmzTargetEnum {
    GlobalAcceleratorV20180706ListCustomRoutingAccelerators = "GlobalAccelerator_V20180706.ListCustomRoutingAccelerators"
}


export class ListCustomRoutingAcceleratorsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListCustomRoutingAcceleratorsXAmzTargetEnum;
}


export class ListCustomRoutingAcceleratorsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListCustomRoutingAcceleratorsQueryParams;

  @Metadata()
  headers: ListCustomRoutingAcceleratorsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListCustomRoutingAcceleratorsRequest;
}


export class ListCustomRoutingAcceleratorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listCustomRoutingAcceleratorsResponse?: shared.ListCustomRoutingAcceleratorsResponse;

  @Metadata()
  statusCode: number;
}

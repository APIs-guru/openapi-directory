import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListByoipCidrsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListByoipCidrsXAmzTargetEnum {
    GlobalAcceleratorV20180706ListByoipCidrs = "GlobalAccelerator_V20180706.ListByoipCidrs"
}


export class ListByoipCidrsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListByoipCidrsXAmzTargetEnum;
}


export class ListByoipCidrsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListByoipCidrsQueryParams;

  @Metadata()
  headers: ListByoipCidrsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListByoipCidrsRequest;
}


export class ListByoipCidrsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listByoipCidrsResponse?: shared.ListByoipCidrsResponse;

  @Metadata()
  statusCode: number;
}

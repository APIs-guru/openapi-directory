import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAcceleratorsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListAcceleratorsXAmzTargetEnum {
    GlobalAcceleratorV20180706ListAccelerators = "GlobalAccelerator_V20180706.ListAccelerators"
}


export class ListAcceleratorsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListAcceleratorsXAmzTargetEnum;
}


export class ListAcceleratorsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAcceleratorsQueryParams;

  @Metadata()
  headers: ListAcceleratorsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListAcceleratorsRequest;
}


export class ListAcceleratorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  listAcceleratorsResponse?: shared.ListAcceleratorsResponse;

  @Metadata()
  statusCode: number;
}

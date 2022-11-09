import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListEndpointsXAmzTargetEnum {
    Comprehend20171127ListEndpoints = "Comprehend_20171127.ListEndpoints"
}


export class ListEndpointsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListEndpointsXAmzTargetEnum;
}


export class ListEndpointsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListEndpointsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListEndpointsRequest;
}


export class ListEndpointsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listEndpointsResponse?: shared.ListEndpointsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}

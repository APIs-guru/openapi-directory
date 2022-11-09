import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteImageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=imageBuildVersionArn" })
  imageBuildVersionArn: string;
}


export class DeleteImageHeaders extends SpeakeasyBase {
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


export class DeleteImageRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeleteImageQueryParams;

  @Metadata()
  headers: DeleteImageHeaders;
}


export class DeleteImageResponse extends SpeakeasyBase {
  @Metadata()
  callRateLimitExceededException?: any;

  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteImageResponse?: shared.DeleteImageResponse;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceDependencyException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetRepositoryCatalogDataXAmzTargetEnum {
    SpencerFrontendServiceGetRepositoryCatalogData = "SpencerFrontendService.GetRepositoryCatalogData"
}


export class GetRepositoryCatalogDataHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetRepositoryCatalogDataXAmzTargetEnum;
}


export class GetRepositoryCatalogDataRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetRepositoryCatalogDataHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetRepositoryCatalogDataRequest;
}


export class GetRepositoryCatalogDataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRepositoryCatalogDataResponse?: shared.GetRepositoryCatalogDataResponse;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  repositoryNotFoundException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}

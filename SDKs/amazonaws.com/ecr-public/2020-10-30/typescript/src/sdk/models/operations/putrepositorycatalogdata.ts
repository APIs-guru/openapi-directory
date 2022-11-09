import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutRepositoryCatalogDataXAmzTargetEnum {
    SpencerFrontendServicePutRepositoryCatalogData = "SpencerFrontendService.PutRepositoryCatalogData"
}


export class PutRepositoryCatalogDataHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutRepositoryCatalogDataXAmzTargetEnum;
}


export class PutRepositoryCatalogDataRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutRepositoryCatalogDataHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutRepositoryCatalogDataRequest;
}


export class PutRepositoryCatalogDataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  putRepositoryCatalogDataResponse?: shared.PutRepositoryCatalogDataResponse;

  @Metadata()
  repositoryNotFoundException?: any;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}

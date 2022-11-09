import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListTestGridSessionArtifactsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResult" })
  maxResult?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListTestGridSessionArtifactsXAmzTargetEnum {
    DeviceFarm20150623ListTestGridSessionArtifacts = "DeviceFarm_20150623.ListTestGridSessionArtifacts"
}


export class ListTestGridSessionArtifactsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListTestGridSessionArtifactsXAmzTargetEnum;
}


export class ListTestGridSessionArtifactsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListTestGridSessionArtifactsQueryParams;

  @Metadata()
  headers: ListTestGridSessionArtifactsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListTestGridSessionArtifactsRequest;
}


export class ListTestGridSessionArtifactsResponse extends SpeakeasyBase {
  @Metadata()
  argumentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  listTestGridSessionArtifactsResult?: shared.ListTestGridSessionArtifactsResult;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;
}

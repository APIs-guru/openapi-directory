import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutRegistryCatalogDataXAmzTargetEnum {
    SpencerFrontendServicePutRegistryCatalogData = "SpencerFrontendService.PutRegistryCatalogData"
}


export class PutRegistryCatalogDataHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutRegistryCatalogDataXAmzTargetEnum;
}


export class PutRegistryCatalogDataRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutRegistryCatalogDataHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutRegistryCatalogDataRequest;
}


export class PutRegistryCatalogDataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  putRegistryCatalogDataResponse?: shared.PutRegistryCatalogDataResponse;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedCommandException?: any;
}

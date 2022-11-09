import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetRegistryCatalogDataXAmzTargetEnum {
    SpencerFrontendServiceGetRegistryCatalogData = "SpencerFrontendService.GetRegistryCatalogData"
}


export class GetRegistryCatalogDataHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetRegistryCatalogDataXAmzTargetEnum;
}


export class GetRegistryCatalogDataRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetRegistryCatalogDataHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class GetRegistryCatalogDataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRegistryCatalogDataResponse?: shared.GetRegistryCatalogDataResponse;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedCommandException?: any;
}

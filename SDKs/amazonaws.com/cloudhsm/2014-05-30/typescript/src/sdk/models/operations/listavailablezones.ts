import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListAvailableZonesXAmzTargetEnum {
    CloudHsmFrontendServiceListAvailableZones = "CloudHsmFrontendService.ListAvailableZones"
}


export class ListAvailableZonesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListAvailableZonesXAmzTargetEnum;
}


export class ListAvailableZonesRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListAvailableZonesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class ListAvailableZonesResponse extends SpeakeasyBase {
  @Metadata()
  cloudHsmInternalException?: any;

  @Metadata()
  cloudHsmServiceException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listAvailableZonesResponse?: shared.ListAvailableZonesResponse;

  @Metadata()
  statusCode: number;
}

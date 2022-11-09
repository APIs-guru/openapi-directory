import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateConnectivityInfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ThingName" })
  thingName: string;
}


export class UpdateConnectivityInfoHeaders extends SpeakeasyBase {
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


export class UpdateConnectivityInfoRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectivityInfo", elemType: shared.ConnectivityInfo })
  connectivityInfo?: shared.ConnectivityInfo[];
}


export class UpdateConnectivityInfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateConnectivityInfoPathParams;

  @Metadata()
  headers: UpdateConnectivityInfoHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateConnectivityInfoRequestBody;
}


export class UpdateConnectivityInfoResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateConnectivityInfoResponse?: shared.UpdateConnectivityInfoResponse;
}

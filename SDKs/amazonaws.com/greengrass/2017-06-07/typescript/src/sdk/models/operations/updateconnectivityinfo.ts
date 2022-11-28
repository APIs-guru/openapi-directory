import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateConnectivityInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ThingName" })
  thingName: string;
}


export class UpdateConnectivityInfoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class UpdateConnectivityInfoRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectivityInfo", elemType: shared.ConnectivityInfo })
  connectivityInfo?: shared.ConnectivityInfo[];
}


export class UpdateConnectivityInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateConnectivityInfoPathParams;

  @SpeakeasyMetadata()
  headers: UpdateConnectivityInfoHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateConnectivityInfoRequestBody;
}


export class UpdateConnectivityInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateConnectivityInfoResponse?: shared.UpdateConnectivityInfoResponse;
}

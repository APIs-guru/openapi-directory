import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListTunnelsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListTunnelsXAmzTargetEnum {
    IoTSecuredTunnelingListTunnels = "IoTSecuredTunneling.ListTunnels"
}


export class ListTunnelsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListTunnelsXAmzTargetEnum;
}


export class ListTunnelsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListTunnelsQueryParams;

  @Metadata()
  headers: ListTunnelsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListTunnelsRequest;
}


export class ListTunnelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTunnelsResponse?: shared.ListTunnelsResponse;

  @Metadata()
  statusCode: number;
}

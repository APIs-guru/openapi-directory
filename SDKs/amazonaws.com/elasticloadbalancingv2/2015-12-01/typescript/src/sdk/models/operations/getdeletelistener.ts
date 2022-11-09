import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteListenerActionEnum {
    DeleteListener = "DeleteListener"
}

export enum GetDeleteListenerVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}


export class GetDeleteListenerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteListenerActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ListenerArn" })
  listenerArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteListenerVersionEnum;
}


export class GetDeleteListenerHeaders extends SpeakeasyBase {
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


export class GetDeleteListenerRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteListenerQueryParams;

  @Metadata()
  headers: GetDeleteListenerHeaders;
}


export class GetDeleteListenerResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAbortEnvironmentUpdateActionEnum {
    AbortEnvironmentUpdate = "AbortEnvironmentUpdate"
}

export enum GetAbortEnvironmentUpdateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetAbortEnvironmentUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAbortEnvironmentUpdateActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" })
  environmentName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAbortEnvironmentUpdateVersionEnum;
}


export class GetAbortEnvironmentUpdateHeaders extends SpeakeasyBase {
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


export class GetAbortEnvironmentUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAbortEnvironmentUpdateQueryParams;

  @SpeakeasyMetadata()
  headers: GetAbortEnvironmentUpdateHeaders;
}


export class GetAbortEnvironmentUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

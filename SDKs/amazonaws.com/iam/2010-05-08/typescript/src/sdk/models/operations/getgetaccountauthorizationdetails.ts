import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetGetAccountAuthorizationDetailsActionEnum {
    GetAccountAuthorizationDetails = "GetAccountAuthorizationDetails"
}

export enum GetGetAccountAuthorizationDetailsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGetAccountAuthorizationDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetAccountAuthorizationDetailsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Filter" })
  filter?: shared.EntityTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetAccountAuthorizationDetailsVersionEnum;
}


export class GetGetAccountAuthorizationDetailsHeaders extends SpeakeasyBase {
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


export class GetGetAccountAuthorizationDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetAccountAuthorizationDetailsQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetAccountAuthorizationDetailsHeaders;
}


export class GetGetAccountAuthorizationDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

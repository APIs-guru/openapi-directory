import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetGetAccountAuthorizationDetailsActionEnum {
    GetAccountAuthorizationDetails = "GetAccountAuthorizationDetails"
}

export enum GetGetAccountAuthorizationDetailsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGetAccountAuthorizationDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetAccountAuthorizationDetailsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Filter" })
  filter?: shared.EntityTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetAccountAuthorizationDetailsVersionEnum;
}


export class GetGetAccountAuthorizationDetailsHeaders extends SpeakeasyBase {
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


export class GetGetAccountAuthorizationDetailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetAccountAuthorizationDetailsQueryParams;

  @Metadata()
  headers: GetGetAccountAuthorizationDetailsHeaders;
}


export class GetGetAccountAuthorizationDetailsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

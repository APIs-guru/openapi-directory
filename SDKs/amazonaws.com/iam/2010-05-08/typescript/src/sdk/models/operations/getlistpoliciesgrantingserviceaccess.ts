import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListPoliciesGrantingServiceAccessActionEnum {
    ListPoliciesGrantingServiceAccess = "ListPoliciesGrantingServiceAccess"
}

export enum GetListPoliciesGrantingServiceAccessVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetListPoliciesGrantingServiceAccessQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListPoliciesGrantingServiceAccessActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Arn" })
  arn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ServiceNamespaces" })
  serviceNamespaces: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListPoliciesGrantingServiceAccessVersionEnum;
}


export class GetListPoliciesGrantingServiceAccessHeaders extends SpeakeasyBase {
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


export class GetListPoliciesGrantingServiceAccessRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListPoliciesGrantingServiceAccessQueryParams;

  @Metadata()
  headers: GetListPoliciesGrantingServiceAccessHeaders;
}


export class GetListPoliciesGrantingServiceAccessResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

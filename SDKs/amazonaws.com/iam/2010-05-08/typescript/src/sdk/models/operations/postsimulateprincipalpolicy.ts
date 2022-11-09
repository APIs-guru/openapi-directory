import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostSimulatePrincipalPolicyActionEnum {
    SimulatePrincipalPolicy = "SimulatePrincipalPolicy"
}

export enum PostSimulatePrincipalPolicyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class PostSimulatePrincipalPolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostSimulatePrincipalPolicyActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostSimulatePrincipalPolicyVersionEnum;
}


export class PostSimulatePrincipalPolicyHeaders extends SpeakeasyBase {
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


export class PostSimulatePrincipalPolicyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostSimulatePrincipalPolicyQueryParams;

  @Metadata()
  headers: PostSimulatePrincipalPolicyHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostSimulatePrincipalPolicyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

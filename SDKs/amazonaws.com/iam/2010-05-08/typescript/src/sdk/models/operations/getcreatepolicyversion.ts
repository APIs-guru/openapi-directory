import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreatePolicyVersionActionEnum {
    CreatePolicyVersion = "CreatePolicyVersion"
}

export enum GetCreatePolicyVersionVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetCreatePolicyVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreatePolicyVersionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyArn" })
  policyArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyDocument" })
  policyDocument: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SetAsDefault" })
  setAsDefault?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreatePolicyVersionVersionEnum;
}


export class GetCreatePolicyVersionHeaders extends SpeakeasyBase {
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


export class GetCreatePolicyVersionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreatePolicyVersionQueryParams;

  @Metadata()
  headers: GetCreatePolicyVersionHeaders;
}


export class GetCreatePolicyVersionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

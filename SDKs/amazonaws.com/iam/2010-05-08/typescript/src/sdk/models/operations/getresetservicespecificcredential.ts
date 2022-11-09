import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetResetServiceSpecificCredentialActionEnum {
    ResetServiceSpecificCredential = "ResetServiceSpecificCredential"
}

export enum GetResetServiceSpecificCredentialVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetResetServiceSpecificCredentialQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetResetServiceSpecificCredentialActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ServiceSpecificCredentialId" })
  serviceSpecificCredentialId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetResetServiceSpecificCredentialVersionEnum;
}


export class GetResetServiceSpecificCredentialHeaders extends SpeakeasyBase {
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


export class GetResetServiceSpecificCredentialRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetResetServiceSpecificCredentialQueryParams;

  @Metadata()
  headers: GetResetServiceSpecificCredentialHeaders;
}


export class GetResetServiceSpecificCredentialResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

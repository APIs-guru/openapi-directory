import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUpdateServiceSpecificCredentialActionEnum {
    UpdateServiceSpecificCredential = "UpdateServiceSpecificCredential"
}

export enum GetUpdateServiceSpecificCredentialStatusEnum {
    Active = "Active"
,    Inactive = "Inactive"
}

export enum GetUpdateServiceSpecificCredentialVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetUpdateServiceSpecificCredentialQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateServiceSpecificCredentialActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ServiceSpecificCredentialId" })
  serviceSpecificCredentialId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status: GetUpdateServiceSpecificCredentialStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateServiceSpecificCredentialVersionEnum;
}


export class GetUpdateServiceSpecificCredentialHeaders extends SpeakeasyBase {
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


export class GetUpdateServiceSpecificCredentialRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdateServiceSpecificCredentialQueryParams;

  @Metadata()
  headers: GetUpdateServiceSpecificCredentialHeaders;
}


export class GetUpdateServiceSpecificCredentialResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

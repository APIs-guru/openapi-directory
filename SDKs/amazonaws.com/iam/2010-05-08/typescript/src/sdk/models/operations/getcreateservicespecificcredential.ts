import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateServiceSpecificCredentialActionEnum {
    CreateServiceSpecificCredential = "CreateServiceSpecificCredential"
}

export enum GetCreateServiceSpecificCredentialVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetCreateServiceSpecificCredentialQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateServiceSpecificCredentialActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ServiceName" })
  serviceName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateServiceSpecificCredentialVersionEnum;
}


export class GetCreateServiceSpecificCredentialHeaders extends SpeakeasyBase {
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


export class GetCreateServiceSpecificCredentialRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateServiceSpecificCredentialQueryParams;

  @Metadata()
  headers: GetCreateServiceSpecificCredentialHeaders;
}


export class GetCreateServiceSpecificCredentialResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDisassociateEnclaveCertificateIamRoleActionEnum {
    DisassociateEnclaveCertificateIamRole = "DisassociateEnclaveCertificateIamRole"
}

export enum PostDisassociateEnclaveCertificateIamRoleVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostDisassociateEnclaveCertificateIamRoleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDisassociateEnclaveCertificateIamRoleActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDisassociateEnclaveCertificateIamRoleVersionEnum;
}


export class PostDisassociateEnclaveCertificateIamRoleHeaders extends SpeakeasyBase {
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


export class PostDisassociateEnclaveCertificateIamRoleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDisassociateEnclaveCertificateIamRoleQueryParams;

  @Metadata()
  headers: PostDisassociateEnclaveCertificateIamRoleHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDisassociateEnclaveCertificateIamRoleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

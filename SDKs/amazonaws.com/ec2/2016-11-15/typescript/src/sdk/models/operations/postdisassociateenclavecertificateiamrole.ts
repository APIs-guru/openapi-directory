import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDisassociateEnclaveCertificateIamRoleActionEnum {
    DisassociateEnclaveCertificateIamRole = "DisassociateEnclaveCertificateIamRole"
}

export enum PostDisassociateEnclaveCertificateIamRoleVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostDisassociateEnclaveCertificateIamRoleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDisassociateEnclaveCertificateIamRoleActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDisassociateEnclaveCertificateIamRoleVersionEnum;
}


export class PostDisassociateEnclaveCertificateIamRoleHeaders extends SpeakeasyBase {
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


export class PostDisassociateEnclaveCertificateIamRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostDisassociateEnclaveCertificateIamRoleQueryParams;

  @SpeakeasyMetadata()
  headers: PostDisassociateEnclaveCertificateIamRoleHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDisassociateEnclaveCertificateIamRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

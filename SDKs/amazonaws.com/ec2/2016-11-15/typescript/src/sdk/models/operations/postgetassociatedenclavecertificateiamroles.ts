import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostGetAssociatedEnclaveCertificateIamRolesActionEnum {
    GetAssociatedEnclaveCertificateIamRoles = "GetAssociatedEnclaveCertificateIamRoles"
}

export enum PostGetAssociatedEnclaveCertificateIamRolesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostGetAssociatedEnclaveCertificateIamRolesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetAssociatedEnclaveCertificateIamRolesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetAssociatedEnclaveCertificateIamRolesVersionEnum;
}


export class PostGetAssociatedEnclaveCertificateIamRolesHeaders extends SpeakeasyBase {
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


export class PostGetAssociatedEnclaveCertificateIamRolesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostGetAssociatedEnclaveCertificateIamRolesQueryParams;

  @SpeakeasyMetadata()
  headers: PostGetAssociatedEnclaveCertificateIamRolesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetAssociatedEnclaveCertificateIamRolesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

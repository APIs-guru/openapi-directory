import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetAssociatedEnclaveCertificateIamRolesActionEnum {
    GetAssociatedEnclaveCertificateIamRoles = "GetAssociatedEnclaveCertificateIamRoles"
}

export enum GetGetAssociatedEnclaveCertificateIamRolesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetGetAssociatedEnclaveCertificateIamRolesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetAssociatedEnclaveCertificateIamRolesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CertificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetAssociatedEnclaveCertificateIamRolesVersionEnum;
}


export class GetGetAssociatedEnclaveCertificateIamRolesHeaders extends SpeakeasyBase {
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


export class GetGetAssociatedEnclaveCertificateIamRolesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetAssociatedEnclaveCertificateIamRolesQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetAssociatedEnclaveCertificateIamRolesHeaders;
}


export class GetGetAssociatedEnclaveCertificateIamRolesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

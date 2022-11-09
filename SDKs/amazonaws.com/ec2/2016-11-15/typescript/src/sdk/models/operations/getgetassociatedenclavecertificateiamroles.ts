import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetAssociatedEnclaveCertificateIamRolesActionEnum {
    GetAssociatedEnclaveCertificateIamRoles = "GetAssociatedEnclaveCertificateIamRoles"
}

export enum GetGetAssociatedEnclaveCertificateIamRolesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetGetAssociatedEnclaveCertificateIamRolesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetAssociatedEnclaveCertificateIamRolesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CertificateArn" })
  certificateArn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetAssociatedEnclaveCertificateIamRolesVersionEnum;
}


export class GetGetAssociatedEnclaveCertificateIamRolesHeaders extends SpeakeasyBase {
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


export class GetGetAssociatedEnclaveCertificateIamRolesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetAssociatedEnclaveCertificateIamRolesQueryParams;

  @Metadata()
  headers: GetGetAssociatedEnclaveCertificateIamRolesHeaders;
}


export class GetGetAssociatedEnclaveCertificateIamRolesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDisassociateEnclaveCertificateIamRoleActionEnum {
    DisassociateEnclaveCertificateIamRole = "DisassociateEnclaveCertificateIamRole"
}

export enum GetDisassociateEnclaveCertificateIamRoleVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDisassociateEnclaveCertificateIamRoleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDisassociateEnclaveCertificateIamRoleActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CertificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDisassociateEnclaveCertificateIamRoleVersionEnum;
}


export class GetDisassociateEnclaveCertificateIamRoleHeaders extends SpeakeasyBase {
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


export class GetDisassociateEnclaveCertificateIamRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDisassociateEnclaveCertificateIamRoleQueryParams;

  @SpeakeasyMetadata()
  headers: GetDisassociateEnclaveCertificateIamRoleHeaders;
}


export class GetDisassociateEnclaveCertificateIamRoleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

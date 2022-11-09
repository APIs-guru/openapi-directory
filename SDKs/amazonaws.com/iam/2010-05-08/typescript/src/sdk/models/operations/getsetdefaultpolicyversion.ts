import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSetDefaultPolicyVersionActionEnum {
    SetDefaultPolicyVersion = "SetDefaultPolicyVersion"
}

export enum GetSetDefaultPolicyVersionVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetSetDefaultPolicyVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetSetDefaultPolicyVersionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyArn" })
  policyArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetSetDefaultPolicyVersionVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VersionId" })
  versionId: string;
}


export class GetSetDefaultPolicyVersionHeaders extends SpeakeasyBase {
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


export class GetSetDefaultPolicyVersionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSetDefaultPolicyVersionQueryParams;

  @Metadata()
  headers: GetSetDefaultPolicyVersionHeaders;
}


export class GetSetDefaultPolicyVersionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

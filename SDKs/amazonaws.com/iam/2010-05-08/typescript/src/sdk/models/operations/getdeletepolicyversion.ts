import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeletePolicyVersionActionEnum {
    DeletePolicyVersion = "DeletePolicyVersion"
}

export enum GetDeletePolicyVersionVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetDeletePolicyVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeletePolicyVersionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PolicyArn" })
  policyArn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeletePolicyVersionVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VersionId" })
  versionId: string;
}


export class GetDeletePolicyVersionHeaders extends SpeakeasyBase {
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


export class GetDeletePolicyVersionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeletePolicyVersionQueryParams;

  @Metadata()
  headers: GetDeletePolicyVersionHeaders;
}


export class GetDeletePolicyVersionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

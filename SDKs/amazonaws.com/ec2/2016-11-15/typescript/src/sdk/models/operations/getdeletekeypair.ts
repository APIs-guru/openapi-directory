import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteKeyPairActionEnum {
    DeleteKeyPair = "DeleteKeyPair"
}

export enum GetDeleteKeyPairVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteKeyPairQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteKeyPairActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=KeyName" })
  keyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=KeyPairId" })
  keyPairId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteKeyPairVersionEnum;
}


export class GetDeleteKeyPairHeaders extends SpeakeasyBase {
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


export class GetDeleteKeyPairRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteKeyPairQueryParams;

  @Metadata()
  headers: GetDeleteKeyPairHeaders;
}


export class GetDeleteKeyPairResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

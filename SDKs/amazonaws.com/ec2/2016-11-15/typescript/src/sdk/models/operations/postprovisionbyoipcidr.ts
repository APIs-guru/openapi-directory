import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostProvisionByoipCidrActionEnum {
    ProvisionByoipCidr = "ProvisionByoipCidr"
}

export enum PostProvisionByoipCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostProvisionByoipCidrQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostProvisionByoipCidrActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostProvisionByoipCidrVersionEnum;
}


export class PostProvisionByoipCidrHeaders extends SpeakeasyBase {
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


export class PostProvisionByoipCidrRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostProvisionByoipCidrQueryParams;

  @Metadata()
  headers: PostProvisionByoipCidrHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostProvisionByoipCidrResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostSwapEnvironmentCnamEsActionEnum {
    SwapEnvironmentCnamEs = "SwapEnvironmentCNAMEs"
}

export enum PostSwapEnvironmentCnamEsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostSwapEnvironmentCnamEsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostSwapEnvironmentCnamEsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostSwapEnvironmentCnamEsVersionEnum;
}


export class PostSwapEnvironmentCnamEsHeaders extends SpeakeasyBase {
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


export class PostSwapEnvironmentCnamEsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostSwapEnvironmentCnamEsQueryParams;

  @SpeakeasyMetadata()
  headers: PostSwapEnvironmentCnamEsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostSwapEnvironmentCnamEsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

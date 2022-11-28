import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostIncreaseReplicaCountActionEnum {
    IncreaseReplicaCount = "IncreaseReplicaCount"
}

export enum PostIncreaseReplicaCountVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class PostIncreaseReplicaCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostIncreaseReplicaCountActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostIncreaseReplicaCountVersionEnum;
}


export class PostIncreaseReplicaCountHeaders extends SpeakeasyBase {
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


export class PostIncreaseReplicaCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostIncreaseReplicaCountQueryParams;

  @SpeakeasyMetadata()
  headers: PostIncreaseReplicaCountHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostIncreaseReplicaCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

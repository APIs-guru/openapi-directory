import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDecreaseReplicaCountActionEnum {
    DecreaseReplicaCount = "DecreaseReplicaCount"
}

export enum PostDecreaseReplicaCountVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class PostDecreaseReplicaCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDecreaseReplicaCountActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDecreaseReplicaCountVersionEnum;
}


export class PostDecreaseReplicaCountHeaders extends SpeakeasyBase {
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


export class PostDecreaseReplicaCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostDecreaseReplicaCountQueryParams;

  @SpeakeasyMetadata()
  headers: PostDecreaseReplicaCountHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDecreaseReplicaCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

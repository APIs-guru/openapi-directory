import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostIncreaseReplicaCountActionEnum {
    IncreaseReplicaCount = "IncreaseReplicaCount"
}

export enum PostIncreaseReplicaCountVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class PostIncreaseReplicaCountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostIncreaseReplicaCountActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostIncreaseReplicaCountVersionEnum;
}


export class PostIncreaseReplicaCountHeaders extends SpeakeasyBase {
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


export class PostIncreaseReplicaCountRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostIncreaseReplicaCountQueryParams;

  @Metadata()
  headers: PostIncreaseReplicaCountHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostIncreaseReplicaCountResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

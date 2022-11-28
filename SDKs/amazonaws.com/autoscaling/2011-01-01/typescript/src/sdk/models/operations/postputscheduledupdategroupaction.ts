import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostPutScheduledUpdateGroupActionActionEnum {
    PutScheduledUpdateGroupAction = "PutScheduledUpdateGroupAction"
}

export enum PostPutScheduledUpdateGroupActionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class PostPutScheduledUpdateGroupActionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostPutScheduledUpdateGroupActionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostPutScheduledUpdateGroupActionVersionEnum;
}


export class PostPutScheduledUpdateGroupActionHeaders extends SpeakeasyBase {
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


export class PostPutScheduledUpdateGroupActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostPutScheduledUpdateGroupActionQueryParams;

  @SpeakeasyMetadata()
  headers: PostPutScheduledUpdateGroupActionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostPutScheduledUpdateGroupActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

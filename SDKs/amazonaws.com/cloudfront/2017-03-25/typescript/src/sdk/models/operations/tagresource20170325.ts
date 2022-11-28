import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TagResource20170325OperationEnum {
    Tag = "Tag"
}


export class TagResource20170325QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Operation" })
  operation: TagResource20170325OperationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Resource" })
  resource: string;
}


export class TagResource20170325Headers extends SpeakeasyBase {
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


export class TagResource20170325Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TagResource20170325QueryParams;

  @SpeakeasyMetadata()
  headers: TagResource20170325Headers;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request: Uint8Array;
}


export class TagResource20170325Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

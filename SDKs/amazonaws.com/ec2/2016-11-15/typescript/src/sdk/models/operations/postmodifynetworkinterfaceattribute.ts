import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostModifyNetworkInterfaceAttributeActionEnum {
    ModifyNetworkInterfaceAttribute = "ModifyNetworkInterfaceAttribute"
}

export enum PostModifyNetworkInterfaceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostModifyNetworkInterfaceAttributeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostModifyNetworkInterfaceAttributeActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostModifyNetworkInterfaceAttributeVersionEnum;
}


export class PostModifyNetworkInterfaceAttributeHeaders extends SpeakeasyBase {
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


export class PostModifyNetworkInterfaceAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostModifyNetworkInterfaceAttributeQueryParams;

  @SpeakeasyMetadata()
  headers: PostModifyNetworkInterfaceAttributeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostModifyNetworkInterfaceAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

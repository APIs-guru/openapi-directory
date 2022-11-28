import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDetachNetworkInterfaceActionEnum {
    DetachNetworkInterface = "DetachNetworkInterface"
}

export enum GetDetachNetworkInterfaceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDetachNetworkInterfaceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDetachNetworkInterfaceActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AttachmentId" })
  attachmentId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDetachNetworkInterfaceVersionEnum;
}


export class GetDetachNetworkInterfaceHeaders extends SpeakeasyBase {
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


export class GetDetachNetworkInterfaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDetachNetworkInterfaceQueryParams;

  @SpeakeasyMetadata()
  headers: GetDetachNetworkInterfaceHeaders;
}


export class GetDetachNetworkInterfaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

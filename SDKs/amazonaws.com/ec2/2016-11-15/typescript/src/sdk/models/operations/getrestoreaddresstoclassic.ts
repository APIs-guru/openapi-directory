import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRestoreAddressToClassicActionEnum {
    RestoreAddressToClassic = "RestoreAddressToClassic"
}

export enum GetRestoreAddressToClassicVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetRestoreAddressToClassicQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRestoreAddressToClassicActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PublicIp" })
  publicIp: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRestoreAddressToClassicVersionEnum;
}


export class GetRestoreAddressToClassicHeaders extends SpeakeasyBase {
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


export class GetRestoreAddressToClassicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRestoreAddressToClassicQueryParams;

  @SpeakeasyMetadata()
  headers: GetRestoreAddressToClassicHeaders;
}


export class GetRestoreAddressToClassicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

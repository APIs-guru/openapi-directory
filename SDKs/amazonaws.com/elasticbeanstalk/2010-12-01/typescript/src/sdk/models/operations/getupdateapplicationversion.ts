import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUpdateApplicationVersionActionEnum {
    UpdateApplicationVersion = "UpdateApplicationVersion"
}

export enum GetUpdateApplicationVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetUpdateApplicationVersionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateApplicationVersionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateApplicationVersionVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VersionLabel" })
  versionLabel: string;
}


export class GetUpdateApplicationVersionHeaders extends SpeakeasyBase {
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


export class GetUpdateApplicationVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUpdateApplicationVersionQueryParams;

  @SpeakeasyMetadata()
  headers: GetUpdateApplicationVersionHeaders;
}


export class GetUpdateApplicationVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

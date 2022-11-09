import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUpdateApplicationVersionActionEnum {
    UpdateApplicationVersion = "UpdateApplicationVersion"
}

export enum GetUpdateApplicationVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetUpdateApplicationVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateApplicationVersionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateApplicationVersionVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VersionLabel" })
  versionLabel: string;
}


export class GetUpdateApplicationVersionHeaders extends SpeakeasyBase {
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


export class GetUpdateApplicationVersionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdateApplicationVersionQueryParams;

  @Metadata()
  headers: GetUpdateApplicationVersionHeaders;
}


export class GetUpdateApplicationVersionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteApplicationVersionActionEnum {
    DeleteApplicationVersion = "DeleteApplicationVersion"
}

export enum GetDeleteApplicationVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDeleteApplicationVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteApplicationVersionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DeleteSourceBundle" })
  deleteSourceBundle?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteApplicationVersionVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VersionLabel" })
  versionLabel: string;
}


export class GetDeleteApplicationVersionHeaders extends SpeakeasyBase {
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


export class GetDeleteApplicationVersionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteApplicationVersionQueryParams;

  @Metadata()
  headers: GetDeleteApplicationVersionHeaders;
}


export class GetDeleteApplicationVersionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

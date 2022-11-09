import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetComposeEnvironmentsActionEnum {
    ComposeEnvironments = "ComposeEnvironments"
}

export enum GetComposeEnvironmentsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetComposeEnvironmentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetComposeEnvironmentsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ApplicationName" })
  applicationName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GroupName" })
  groupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetComposeEnvironmentsVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VersionLabels" })
  versionLabels?: string[];
}


export class GetComposeEnvironmentsHeaders extends SpeakeasyBase {
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


export class GetComposeEnvironmentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetComposeEnvironmentsQueryParams;

  @Metadata()
  headers: GetComposeEnvironmentsHeaders;
}


export class GetComposeEnvironmentsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

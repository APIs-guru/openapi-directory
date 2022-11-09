import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteLaunchTemplateVersionsActionEnum {
    DeleteLaunchTemplateVersions = "DeleteLaunchTemplateVersions"
}

export enum GetDeleteLaunchTemplateVersionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteLaunchTemplateVersionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteLaunchTemplateVersionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LaunchTemplateId" })
  launchTemplateId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LaunchTemplateName" })
  launchTemplateName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LaunchTemplateVersion" })
  launchTemplateVersion: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteLaunchTemplateVersionsVersionEnum;
}


export class GetDeleteLaunchTemplateVersionsHeaders extends SpeakeasyBase {
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


export class GetDeleteLaunchTemplateVersionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteLaunchTemplateVersionsQueryParams;

  @Metadata()
  headers: GetDeleteLaunchTemplateVersionsHeaders;
}


export class GetDeleteLaunchTemplateVersionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

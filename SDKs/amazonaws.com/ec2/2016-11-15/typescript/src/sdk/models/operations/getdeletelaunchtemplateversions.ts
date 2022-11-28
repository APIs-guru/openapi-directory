import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteLaunchTemplateVersionsActionEnum {
    DeleteLaunchTemplateVersions = "DeleteLaunchTemplateVersions"
}

export enum GetDeleteLaunchTemplateVersionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteLaunchTemplateVersionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteLaunchTemplateVersionsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LaunchTemplateId" })
  launchTemplateId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LaunchTemplateName" })
  launchTemplateName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LaunchTemplateVersion" })
  launchTemplateVersion: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteLaunchTemplateVersionsVersionEnum;
}


export class GetDeleteLaunchTemplateVersionsHeaders extends SpeakeasyBase {
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


export class GetDeleteLaunchTemplateVersionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteLaunchTemplateVersionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteLaunchTemplateVersionsHeaders;
}


export class GetDeleteLaunchTemplateVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

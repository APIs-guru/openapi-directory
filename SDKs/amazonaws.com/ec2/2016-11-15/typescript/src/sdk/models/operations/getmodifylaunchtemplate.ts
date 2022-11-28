import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyLaunchTemplateActionEnum {
    ModifyLaunchTemplate = "ModifyLaunchTemplate"
}

export enum GetModifyLaunchTemplateVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyLaunchTemplateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyLaunchTemplateActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LaunchTemplateId" })
  launchTemplateId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LaunchTemplateName" })
  launchTemplateName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SetDefaultVersion" })
  setDefaultVersion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyLaunchTemplateVersionEnum;
}


export class GetModifyLaunchTemplateHeaders extends SpeakeasyBase {
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


export class GetModifyLaunchTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyLaunchTemplateQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyLaunchTemplateHeaders;
}


export class GetModifyLaunchTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

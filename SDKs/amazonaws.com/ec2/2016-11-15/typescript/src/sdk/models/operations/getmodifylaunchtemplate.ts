import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyLaunchTemplateActionEnum {
    ModifyLaunchTemplate = "ModifyLaunchTemplate"
}

export enum GetModifyLaunchTemplateVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyLaunchTemplateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyLaunchTemplateActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClientToken" })
  clientToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LaunchTemplateId" })
  launchTemplateId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LaunchTemplateName" })
  launchTemplateName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SetDefaultVersion" })
  setDefaultVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyLaunchTemplateVersionEnum;
}


export class GetModifyLaunchTemplateHeaders extends SpeakeasyBase {
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


export class GetModifyLaunchTemplateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyLaunchTemplateQueryParams;

  @Metadata()
  headers: GetModifyLaunchTemplateHeaders;
}


export class GetModifyLaunchTemplateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

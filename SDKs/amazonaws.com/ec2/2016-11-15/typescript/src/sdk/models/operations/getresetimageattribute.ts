import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetResetImageAttributeActionEnum {
    ResetImageAttribute = "ResetImageAttribute"
}

export enum GetResetImageAttributeAttributeEnum {
    LaunchPermission = "launchPermission"
}

export enum GetResetImageAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetResetImageAttributeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetResetImageAttributeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Attribute" })
  attribute: GetResetImageAttributeAttributeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ImageId" })
  imageId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetResetImageAttributeVersionEnum;
}


export class GetResetImageAttributeHeaders extends SpeakeasyBase {
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


export class GetResetImageAttributeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetResetImageAttributeQueryParams;

  @Metadata()
  headers: GetResetImageAttributeHeaders;
}


export class GetResetImageAttributeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

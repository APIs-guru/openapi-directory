import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


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
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetResetImageAttributeActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Attribute" })
  attribute: GetResetImageAttributeAttributeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ImageId" })
  imageId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetResetImageAttributeVersionEnum;
}


export class GetResetImageAttributeHeaders extends SpeakeasyBase {
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


export class GetResetImageAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetResetImageAttributeQueryParams;

  @SpeakeasyMetadata()
  headers: GetResetImageAttributeHeaders;
}


export class GetResetImageAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

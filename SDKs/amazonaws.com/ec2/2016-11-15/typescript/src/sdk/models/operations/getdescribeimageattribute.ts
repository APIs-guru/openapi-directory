import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeImageAttributeActionEnum {
    DescribeImageAttribute = "DescribeImageAttribute"
}

export enum GetDescribeImageAttributeAttributeEnum {
    Description = "description"
,    Kernel = "kernel"
,    Ramdisk = "ramdisk"
,    LaunchPermission = "launchPermission"
,    ProductCodes = "productCodes"
,    BlockDeviceMapping = "blockDeviceMapping"
,    SriovNetSupport = "sriovNetSupport"
,    BootMode = "bootMode"
}

export enum GetDescribeImageAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDescribeImageAttributeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeImageAttributeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Attribute" })
  attribute: GetDescribeImageAttributeAttributeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ImageId" })
  imageId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeImageAttributeVersionEnum;
}


export class GetDescribeImageAttributeHeaders extends SpeakeasyBase {
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


export class GetDescribeImageAttributeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeImageAttributeQueryParams;

  @Metadata()
  headers: GetDescribeImageAttributeHeaders;
}


export class GetDescribeImageAttributeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

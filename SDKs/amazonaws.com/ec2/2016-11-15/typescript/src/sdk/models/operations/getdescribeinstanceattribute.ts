import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeInstanceAttributeActionEnum {
    DescribeInstanceAttribute = "DescribeInstanceAttribute"
}

export enum GetDescribeInstanceAttributeAttributeEnum {
    InstanceType = "instanceType"
,    Kernel = "kernel"
,    Ramdisk = "ramdisk"
,    UserData = "userData"
,    DisableApiTermination = "disableApiTermination"
,    InstanceInitiatedShutdownBehavior = "instanceInitiatedShutdownBehavior"
,    RootDeviceName = "rootDeviceName"
,    BlockDeviceMapping = "blockDeviceMapping"
,    ProductCodes = "productCodes"
,    SourceDestCheck = "sourceDestCheck"
,    GroupSet = "groupSet"
,    EbsOptimized = "ebsOptimized"
,    SriovNetSupport = "sriovNetSupport"
,    EnaSupport = "enaSupport"
,    EnclaveOptions = "enclaveOptions"
}

export enum GetDescribeInstanceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDescribeInstanceAttributeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeInstanceAttributeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Attribute" })
  attribute: GetDescribeInstanceAttributeAttributeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeInstanceAttributeVersionEnum;
}


export class GetDescribeInstanceAttributeHeaders extends SpeakeasyBase {
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


export class GetDescribeInstanceAttributeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeInstanceAttributeQueryParams;

  @Metadata()
  headers: GetDescribeInstanceAttributeHeaders;
}


export class GetDescribeInstanceAttributeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

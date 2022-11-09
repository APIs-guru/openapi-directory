import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetResetInstanceAttributeActionEnum {
    ResetInstanceAttribute = "ResetInstanceAttribute"
}

export enum GetResetInstanceAttributeAttributeEnum {
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

export enum GetResetInstanceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetResetInstanceAttributeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetResetInstanceAttributeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Attribute" })
  attribute: GetResetInstanceAttributeAttributeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetResetInstanceAttributeVersionEnum;
}


export class GetResetInstanceAttributeHeaders extends SpeakeasyBase {
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


export class GetResetInstanceAttributeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetResetInstanceAttributeQueryParams;

  @Metadata()
  headers: GetResetInstanceAttributeHeaders;
}


export class GetResetInstanceAttributeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetResetInstanceAttributeActionEnum {
    ResetInstanceAttribute = "ResetInstanceAttribute"
}

export enum GetResetInstanceAttributeAttributeEnum {
    InstanceType = "instanceType",
    Kernel = "kernel",
    Ramdisk = "ramdisk",
    UserData = "userData",
    DisableApiTermination = "disableApiTermination",
    InstanceInitiatedShutdownBehavior = "instanceInitiatedShutdownBehavior",
    RootDeviceName = "rootDeviceName",
    BlockDeviceMapping = "blockDeviceMapping",
    ProductCodes = "productCodes",
    SourceDestCheck = "sourceDestCheck",
    GroupSet = "groupSet",
    EbsOptimized = "ebsOptimized",
    SriovNetSupport = "sriovNetSupport",
    EnaSupport = "enaSupport",
    EnclaveOptions = "enclaveOptions"
}

export enum GetResetInstanceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetResetInstanceAttributeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetResetInstanceAttributeActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Attribute" })
  attribute: GetResetInstanceAttributeAttributeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetResetInstanceAttributeVersionEnum;
}


export class GetResetInstanceAttributeHeaders extends SpeakeasyBase {
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


export class GetResetInstanceAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetResetInstanceAttributeQueryParams;

  @SpeakeasyMetadata()
  headers: GetResetInstanceAttributeHeaders;
}


export class GetResetInstanceAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

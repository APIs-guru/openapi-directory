import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateSoftwareUpdateJobHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" })
  xAmznClientToken?: string;
}

export enum CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum {
    Core = "core",
    OtaAgent = "ota_agent"
}

export enum CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum {
    None = "NONE",
    Trace = "TRACE",
    Debug = "DEBUG",
    Verbose = "VERBOSE",
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR",
    Fatal = "FATAL"
}

export enum CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum {
    Armv6l = "armv6l",
    Armv7l = "armv7l",
    X8664 = "x86_64",
    Aarch64 = "aarch64"
}

export enum CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum {
    Ubuntu = "ubuntu",
    Raspbian = "raspbian",
    AmazonLinux = "amazon_linux",
    Openwrt = "openwrt"
}


export class CreateSoftwareUpdateJobRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3UrlSignerRole" })
  s3UrlSignerRole: string;

  @SpeakeasyMetadata({ data: "json, name=SoftwareToUpdate" })
  softwareToUpdate: CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdateAgentLogLevel" })
  updateAgentLogLevel?: CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdateTargets" })
  updateTargets: string[];

  @SpeakeasyMetadata({ data: "json, name=UpdateTargetsArchitecture" })
  updateTargetsArchitecture: CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum;

  @SpeakeasyMetadata({ data: "json, name=UpdateTargetsOperatingSystem" })
  updateTargetsOperatingSystem: CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum;
}


export class CreateSoftwareUpdateJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateSoftwareUpdateJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateSoftwareUpdateJobRequestBody;
}


export class CreateSoftwareUpdateJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createSoftwareUpdateJobResponse?: shared.CreateSoftwareUpdateJobResponse;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

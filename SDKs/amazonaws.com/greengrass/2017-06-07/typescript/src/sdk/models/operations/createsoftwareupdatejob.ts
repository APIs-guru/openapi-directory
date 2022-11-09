import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSoftwareUpdateJobHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" })
  xAmznClientToken?: string;
}

export enum CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum {
    Core = "core"
,    OtaAgent = "ota_agent"
}

export enum CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum {
    None = "NONE"
,    Trace = "TRACE"
,    Debug = "DEBUG"
,    Verbose = "VERBOSE"
,    Info = "INFO"
,    Warn = "WARN"
,    Error = "ERROR"
,    Fatal = "FATAL"
}

export enum CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum {
    Armv6l = "armv6l"
,    Armv7l = "armv7l"
,    X8664 = "x86_64"
,    Aarch64 = "aarch64"
}

export enum CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum {
    Ubuntu = "ubuntu"
,    Raspbian = "raspbian"
,    AmazonLinux = "amazon_linux"
,    Openwrt = "openwrt"
}


export class CreateSoftwareUpdateJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3UrlSignerRole" })
  s3UrlSignerRole: string;

  @Metadata({ data: "json, name=SoftwareToUpdate" })
  softwareToUpdate: CreateSoftwareUpdateJobRequestBodySoftwareToUpdateEnum;

  @Metadata({ data: "json, name=UpdateAgentLogLevel" })
  updateAgentLogLevel?: CreateSoftwareUpdateJobRequestBodyUpdateAgentLogLevelEnum;

  @Metadata({ data: "json, name=UpdateTargets" })
  updateTargets: string[];

  @Metadata({ data: "json, name=UpdateTargetsArchitecture" })
  updateTargetsArchitecture: CreateSoftwareUpdateJobRequestBodyUpdateTargetsArchitectureEnum;

  @Metadata({ data: "json, name=UpdateTargetsOperatingSystem" })
  updateTargetsOperatingSystem: CreateSoftwareUpdateJobRequestBodyUpdateTargetsOperatingSystemEnum;
}


export class CreateSoftwareUpdateJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateSoftwareUpdateJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateSoftwareUpdateJobRequestBody;
}


export class CreateSoftwareUpdateJobResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createSoftwareUpdateJobResponse?: shared.CreateSoftwareUpdateJobResponse;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteLaunchConfigurationActionEnum {
    DeleteLaunchConfiguration = "DeleteLaunchConfiguration"
}

export enum GetDeleteLaunchConfigurationVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetDeleteLaunchConfigurationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteLaunchConfigurationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LaunchConfigurationName" })
  launchConfigurationName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteLaunchConfigurationVersionEnum;
}


export class GetDeleteLaunchConfigurationHeaders extends SpeakeasyBase {
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


export class GetDeleteLaunchConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteLaunchConfigurationQueryParams;

  @Metadata()
  headers: GetDeleteLaunchConfigurationHeaders;
}


export class GetDeleteLaunchConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

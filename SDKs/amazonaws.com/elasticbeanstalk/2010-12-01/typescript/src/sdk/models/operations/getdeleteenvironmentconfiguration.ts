import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteEnvironmentConfigurationActionEnum {
    DeleteEnvironmentConfiguration = "DeleteEnvironmentConfiguration"
}

export enum GetDeleteEnvironmentConfigurationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDeleteEnvironmentConfigurationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteEnvironmentConfigurationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnvironmentName" })
  environmentName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteEnvironmentConfigurationVersionEnum;
}


export class GetDeleteEnvironmentConfigurationHeaders extends SpeakeasyBase {
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


export class GetDeleteEnvironmentConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteEnvironmentConfigurationQueryParams;

  @Metadata()
  headers: GetDeleteEnvironmentConfigurationHeaders;
}


export class GetDeleteEnvironmentConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

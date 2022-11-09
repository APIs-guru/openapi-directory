import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeLaunchConfigurationsActionEnum {
    DescribeLaunchConfigurations = "DescribeLaunchConfigurations"
}

export enum GetDescribeLaunchConfigurationsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetDescribeLaunchConfigurationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeLaunchConfigurationsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=LaunchConfigurationNames" })
  launchConfigurationNames?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeLaunchConfigurationsVersionEnum;
}


export class GetDescribeLaunchConfigurationsHeaders extends SpeakeasyBase {
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


export class GetDescribeLaunchConfigurationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeLaunchConfigurationsQueryParams;

  @Metadata()
  headers: GetDescribeLaunchConfigurationsHeaders;
}


export class GetDescribeLaunchConfigurationsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

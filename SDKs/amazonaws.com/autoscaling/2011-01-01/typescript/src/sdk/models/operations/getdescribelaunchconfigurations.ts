import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeLaunchConfigurationsActionEnum {
    DescribeLaunchConfigurations = "DescribeLaunchConfigurations"
}

export enum GetDescribeLaunchConfigurationsVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}


export class GetDescribeLaunchConfigurationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeLaunchConfigurationsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LaunchConfigurationNames" })
  launchConfigurationNames?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeLaunchConfigurationsVersionEnum;
}


export class GetDescribeLaunchConfigurationsHeaders extends SpeakeasyBase {
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


export class GetDescribeLaunchConfigurationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeLaunchConfigurationsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeLaunchConfigurationsHeaders;
}


export class GetDescribeLaunchConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

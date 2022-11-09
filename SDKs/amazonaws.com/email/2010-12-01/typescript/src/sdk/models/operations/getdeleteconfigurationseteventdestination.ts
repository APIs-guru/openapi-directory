import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteConfigurationSetEventDestinationActionEnum {
    DeleteConfigurationSetEventDestination = "DeleteConfigurationSetEventDestination"
}

export enum GetDeleteConfigurationSetEventDestinationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDeleteConfigurationSetEventDestinationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteConfigurationSetEventDestinationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSetName" })
  configurationSetName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EventDestinationName" })
  eventDestinationName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteConfigurationSetEventDestinationVersionEnum;
}


export class GetDeleteConfigurationSetEventDestinationHeaders extends SpeakeasyBase {
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


export class GetDeleteConfigurationSetEventDestinationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteConfigurationSetEventDestinationQueryParams;

  @Metadata()
  headers: GetDeleteConfigurationSetEventDestinationHeaders;
}


export class GetDeleteConfigurationSetEventDestinationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

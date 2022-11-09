import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteConfigurationSetActionEnum {
    DeleteConfigurationSet = "DeleteConfigurationSet"
}

export enum GetDeleteConfigurationSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDeleteConfigurationSetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteConfigurationSetActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSetName" })
  configurationSetName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteConfigurationSetVersionEnum;
}


export class GetDeleteConfigurationSetHeaders extends SpeakeasyBase {
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


export class GetDeleteConfigurationSetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteConfigurationSetQueryParams;

  @Metadata()
  headers: GetDeleteConfigurationSetHeaders;
}


export class GetDeleteConfigurationSetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

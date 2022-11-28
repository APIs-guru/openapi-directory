import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCreateConfigurationSetActionEnum {
    CreateConfigurationSet = "CreateConfigurationSet"
}


// GetCreateConfigurationSetConfigurationSet
/** 
 * <p>The name of the configuration set.</p> <p>Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES. For more information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html">Using Amazon SES Configuration Sets</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon SES Developer Guide</a>.</p>
**/
export class GetCreateConfigurationSetConfigurationSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=Name" })
  name: string;
}

export enum GetCreateConfigurationSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetCreateConfigurationSetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateConfigurationSetActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSet" })
  configurationSet: GetCreateConfigurationSetConfigurationSet;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateConfigurationSetVersionEnum;
}


export class GetCreateConfigurationSetHeaders extends SpeakeasyBase {
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


export class GetCreateConfigurationSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreateConfigurationSetQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreateConfigurationSetHeaders;
}


export class GetCreateConfigurationSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

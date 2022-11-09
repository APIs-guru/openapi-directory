import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateConfigurationSetActionEnum {
    CreateConfigurationSet = "CreateConfigurationSet"
}


// GetCreateConfigurationSetConfigurationSet
/** 
 * <p>The name of the configuration set.</p> <p>Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES. For more information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html">Using Amazon SES Configuration Sets</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon SES Developer Guide</a>.</p>
**/
export class GetCreateConfigurationSetConfigurationSet extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=Name" })
  name: string;
}

export enum GetCreateConfigurationSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetCreateConfigurationSetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateConfigurationSetActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConfigurationSet" })
  configurationSet: GetCreateConfigurationSetConfigurationSet;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateConfigurationSetVersionEnum;
}


export class GetCreateConfigurationSetHeaders extends SpeakeasyBase {
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


export class GetCreateConfigurationSetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateConfigurationSetQueryParams;

  @Metadata()
  headers: GetCreateConfigurationSetHeaders;
}


export class GetCreateConfigurationSetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

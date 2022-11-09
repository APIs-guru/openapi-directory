import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddTagsToVaultPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vaultName" })
  vaultName: string;
}

export enum AddTagsToVaultOperationEnum {
    Add = "add"
}


export class AddTagsToVaultQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=operation" })
  operation: AddTagsToVaultOperationEnum;
}


export class AddTagsToVaultHeaders extends SpeakeasyBase {
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


export class AddTagsToVaultRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class AddTagsToVaultRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddTagsToVaultPathParams;

  @Metadata()
  queryParams: AddTagsToVaultQueryParams;

  @Metadata()
  headers: AddTagsToVaultHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddTagsToVaultRequestBody;
}


export class AddTagsToVaultResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  missingParameterValueException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}

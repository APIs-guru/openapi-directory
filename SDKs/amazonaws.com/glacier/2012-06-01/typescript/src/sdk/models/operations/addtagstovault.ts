import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddTagsToVaultPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vaultName" })
  vaultName: string;
}

export enum AddTagsToVaultOperationEnum {
    Add = "add"
}


export class AddTagsToVaultQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=operation" })
  operation: AddTagsToVaultOperationEnum;
}


export class AddTagsToVaultHeaders extends SpeakeasyBase {
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


export class AddTagsToVaultRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}


export class AddTagsToVaultRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddTagsToVaultPathParams;

  @SpeakeasyMetadata()
  queryParams: AddTagsToVaultQueryParams;

  @SpeakeasyMetadata()
  headers: AddTagsToVaultHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddTagsToVaultRequestBody;
}


export class AddTagsToVaultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  missingParameterValueException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

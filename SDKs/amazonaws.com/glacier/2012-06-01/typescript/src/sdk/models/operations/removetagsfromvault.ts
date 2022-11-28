import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveTagsFromVaultPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vaultName" })
  vaultName: string;
}

export enum RemoveTagsFromVaultOperationEnum {
    Remove = "remove"
}


export class RemoveTagsFromVaultQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=operation" })
  operation: RemoveTagsFromVaultOperationEnum;
}


export class RemoveTagsFromVaultHeaders extends SpeakeasyBase {
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


export class RemoveTagsFromVaultRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TagKeys" })
  tagKeys?: string[];
}


export class RemoveTagsFromVaultRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveTagsFromVaultPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveTagsFromVaultQueryParams;

  @SpeakeasyMetadata()
  headers: RemoveTagsFromVaultHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveTagsFromVaultRequestBody;
}


export class RemoveTagsFromVaultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  missingParameterValueException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetStoredQueryXAmzTargetEnum {
    StarlingDoveServiceGetStoredQuery = "StarlingDoveService.GetStoredQuery"
}


export class GetStoredQueryHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetStoredQueryXAmzTargetEnum;
}


export class GetStoredQueryRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetStoredQueryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetStoredQueryRequest;
}


export class GetStoredQueryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getStoredQueryResponse?: shared.GetStoredQueryResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}

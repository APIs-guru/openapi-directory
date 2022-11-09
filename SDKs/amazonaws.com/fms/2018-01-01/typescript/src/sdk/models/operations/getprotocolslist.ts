import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetProtocolsListXAmzTargetEnum {
    Awsfms20180101GetProtocolsList = "AWSFMS_20180101.GetProtocolsList"
}


export class GetProtocolsListHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetProtocolsListXAmzTargetEnum;
}


export class GetProtocolsListRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetProtocolsListHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetProtocolsListRequest;
}


export class GetProtocolsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getProtocolsListResponse?: shared.GetProtocolsListResponse;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidOperationException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}

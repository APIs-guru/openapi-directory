import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutProtocolsListXAmzTargetEnum {
    Awsfms20180101PutProtocolsList = "AWSFMS_20180101.PutProtocolsList"
}


export class PutProtocolsListHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutProtocolsListXAmzTargetEnum;
}


export class PutProtocolsListRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutProtocolsListHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutProtocolsListRequest;
}


export class PutProtocolsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalErrorException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  invalidOperationException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  putProtocolsListResponse?: shared.PutProtocolsListResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListPartnerEventSourceAccountsXAmzTargetEnum {
    AwsEventsListPartnerEventSourceAccounts = "AWSEvents.ListPartnerEventSourceAccounts"
}


export class ListPartnerEventSourceAccountsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListPartnerEventSourceAccountsXAmzTargetEnum;
}


export class ListPartnerEventSourceAccountsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ListPartnerEventSourceAccountsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListPartnerEventSourceAccountsRequest;
}


export class ListPartnerEventSourceAccountsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  listPartnerEventSourceAccountsResponse?: shared.ListPartnerEventSourceAccountsResponse;

  @Metadata()
  operationDisabledException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}

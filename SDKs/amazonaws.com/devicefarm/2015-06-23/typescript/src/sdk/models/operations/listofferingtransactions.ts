import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListOfferingTransactionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListOfferingTransactionsXAmzTargetEnum {
    DeviceFarm20150623ListOfferingTransactions = "DeviceFarm_20150623.ListOfferingTransactions"
}


export class ListOfferingTransactionsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListOfferingTransactionsXAmzTargetEnum;
}


export class ListOfferingTransactionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListOfferingTransactionsQueryParams;

  @Metadata()
  headers: ListOfferingTransactionsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListOfferingTransactionsRequest;
}


export class ListOfferingTransactionsResponse extends SpeakeasyBase {
  @Metadata()
  argumentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  listOfferingTransactionsResult?: shared.ListOfferingTransactionsResult;

  @Metadata()
  notEligibleException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  serviceAccountException?: any;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListOfferingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListOfferingsXAmzTargetEnum {
    DeviceFarm20150623ListOfferings = "DeviceFarm_20150623.ListOfferings"
}


export class ListOfferingsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListOfferingsXAmzTargetEnum;
}


export class ListOfferingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListOfferingsQueryParams;

  @Metadata()
  headers: ListOfferingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListOfferingsRequest;
}


export class ListOfferingsResponse extends SpeakeasyBase {
  @Metadata()
  argumentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  listOfferingsResult?: shared.ListOfferingsResult;

  @Metadata()
  notEligibleException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  serviceAccountException?: any;

  @Metadata()
  statusCode: number;
}

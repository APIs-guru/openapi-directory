import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListOfferingPromotionsXAmzTargetEnum {
    DeviceFarm20150623ListOfferingPromotions = "DeviceFarm_20150623.ListOfferingPromotions"
}


export class ListOfferingPromotionsHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListOfferingPromotionsXAmzTargetEnum;
}


export class ListOfferingPromotionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ListOfferingPromotionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListOfferingPromotionsRequest;
}


export class ListOfferingPromotionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  argumentException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  listOfferingPromotionsResult?: shared.ListOfferingPromotionsResult;

  @SpeakeasyMetadata()
  notEligibleException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  serviceAccountException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

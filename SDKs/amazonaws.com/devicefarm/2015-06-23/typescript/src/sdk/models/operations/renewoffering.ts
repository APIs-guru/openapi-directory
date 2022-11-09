import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RenewOfferingXAmzTargetEnum {
    DeviceFarm20150623RenewOffering = "DeviceFarm_20150623.RenewOffering"
}


export class RenewOfferingHeaders extends SpeakeasyBase {
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
  xAmzTarget: RenewOfferingXAmzTargetEnum;
}


export class RenewOfferingRequest extends SpeakeasyBase {
  @Metadata()
  headers: RenewOfferingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RenewOfferingRequest;
}


export class RenewOfferingResponse extends SpeakeasyBase {
  @Metadata()
  argumentException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notEligibleException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  renewOfferingResult?: shared.RenewOfferingResult;

  @Metadata()
  serviceAccountException?: any;

  @Metadata()
  statusCode: number;
}

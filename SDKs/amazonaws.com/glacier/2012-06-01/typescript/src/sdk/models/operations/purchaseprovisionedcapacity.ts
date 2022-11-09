import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PurchaseProvisionedCapacityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class PurchaseProvisionedCapacityHeaders extends SpeakeasyBase {
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
}


export class PurchaseProvisionedCapacityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PurchaseProvisionedCapacityPathParams;

  @Metadata()
  headers: PurchaseProvisionedCapacityHeaders;
}


export class PurchaseProvisionedCapacityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  missingParameterValueException?: any;

  @Metadata()
  purchaseProvisionedCapacityOutput?: Map<string, any>;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}

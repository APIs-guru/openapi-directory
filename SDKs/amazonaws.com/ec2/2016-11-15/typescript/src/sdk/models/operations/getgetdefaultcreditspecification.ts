import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetDefaultCreditSpecificationActionEnum {
    GetDefaultCreditSpecification = "GetDefaultCreditSpecification"
}

export enum GetGetDefaultCreditSpecificationInstanceFamilyEnum {
    T2 = "t2",
    T3 = "t3",
    T3a = "t3a",
    T4g = "t4g"
}

export enum GetGetDefaultCreditSpecificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetGetDefaultCreditSpecificationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetDefaultCreditSpecificationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceFamily" })
  instanceFamily: GetGetDefaultCreditSpecificationInstanceFamilyEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetDefaultCreditSpecificationVersionEnum;
}


export class GetGetDefaultCreditSpecificationHeaders extends SpeakeasyBase {
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


export class GetGetDefaultCreditSpecificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetDefaultCreditSpecificationQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetDefaultCreditSpecificationHeaders;
}


export class GetGetDefaultCreditSpecificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

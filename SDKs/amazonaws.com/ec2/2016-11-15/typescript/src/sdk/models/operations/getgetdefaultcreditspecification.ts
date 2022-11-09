import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetDefaultCreditSpecificationActionEnum {
    GetDefaultCreditSpecification = "GetDefaultCreditSpecification"
}

export enum GetGetDefaultCreditSpecificationInstanceFamilyEnum {
    T2 = "t2"
,    T3 = "t3"
,    T3a = "t3a"
,    T4g = "t4g"
}

export enum GetGetDefaultCreditSpecificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetGetDefaultCreditSpecificationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetDefaultCreditSpecificationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceFamily" })
  instanceFamily: GetGetDefaultCreditSpecificationInstanceFamilyEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetDefaultCreditSpecificationVersionEnum;
}


export class GetGetDefaultCreditSpecificationHeaders extends SpeakeasyBase {
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


export class GetGetDefaultCreditSpecificationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetDefaultCreditSpecificationQueryParams;

  @Metadata()
  headers: GetGetDefaultCreditSpecificationHeaders;
}


export class GetGetDefaultCreditSpecificationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGenerateServiceLastAccessedDetailsActionEnum {
    GenerateServiceLastAccessedDetails = "GenerateServiceLastAccessedDetails"
}

export enum GetGenerateServiceLastAccessedDetailsGranularityEnum {
    ServiceLevel = "SERVICE_LEVEL",
    ActionLevel = "ACTION_LEVEL"
}

export enum GetGenerateServiceLastAccessedDetailsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGenerateServiceLastAccessedDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGenerateServiceLastAccessedDetailsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Granularity" })
  granularity?: GetGenerateServiceLastAccessedDetailsGranularityEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGenerateServiceLastAccessedDetailsVersionEnum;
}


export class GetGenerateServiceLastAccessedDetailsHeaders extends SpeakeasyBase {
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


export class GetGenerateServiceLastAccessedDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGenerateServiceLastAccessedDetailsQueryParams;

  @SpeakeasyMetadata()
  headers: GetGenerateServiceLastAccessedDetailsHeaders;
}


export class GetGenerateServiceLastAccessedDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

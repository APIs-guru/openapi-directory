import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGenerateServiceLastAccessedDetailsActionEnum {
    GenerateServiceLastAccessedDetails = "GenerateServiceLastAccessedDetails"
}

export enum GetGenerateServiceLastAccessedDetailsGranularityEnum {
    ServiceLevel = "SERVICE_LEVEL"
,    ActionLevel = "ACTION_LEVEL"
}

export enum GetGenerateServiceLastAccessedDetailsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGenerateServiceLastAccessedDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGenerateServiceLastAccessedDetailsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Arn" })
  arn: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Granularity" })
  granularity?: GetGenerateServiceLastAccessedDetailsGranularityEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGenerateServiceLastAccessedDetailsVersionEnum;
}


export class GetGenerateServiceLastAccessedDetailsHeaders extends SpeakeasyBase {
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


export class GetGenerateServiceLastAccessedDetailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGenerateServiceLastAccessedDetailsQueryParams;

  @Metadata()
  headers: GetGenerateServiceLastAccessedDetailsHeaders;
}


export class GetGenerateServiceLastAccessedDetailsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

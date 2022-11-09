import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyIdFormatActionEnum {
    ModifyIdFormat = "ModifyIdFormat"
}

export enum GetModifyIdFormatVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyIdFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyIdFormatActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Resource" })
  resource: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UseLongIds" })
  useLongIds: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyIdFormatVersionEnum;
}


export class GetModifyIdFormatHeaders extends SpeakeasyBase {
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


export class GetModifyIdFormatRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyIdFormatQueryParams;

  @Metadata()
  headers: GetModifyIdFormatHeaders;
}


export class GetModifyIdFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

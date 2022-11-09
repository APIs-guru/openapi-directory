import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUpdateSynonymOptionsActionEnum {
    UpdateSynonymOptions = "UpdateSynonymOptions"
}

export enum GetUpdateSynonymOptionsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}


export class GetUpdateSynonymOptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateSynonymOptionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DomainName" })
  domainName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Synonyms" })
  synonyms: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateSynonymOptionsVersionEnum;
}


export class GetUpdateSynonymOptionsHeaders extends SpeakeasyBase {
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


export class GetUpdateSynonymOptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUpdateSynonymOptionsQueryParams;

  @Metadata()
  headers: GetUpdateSynonymOptionsHeaders;
}


export class GetUpdateSynonymOptionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

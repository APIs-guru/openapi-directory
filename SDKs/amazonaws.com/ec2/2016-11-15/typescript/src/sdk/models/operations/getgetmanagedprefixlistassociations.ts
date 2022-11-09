import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetManagedPrefixListAssociationsActionEnum {
    GetManagedPrefixListAssociations = "GetManagedPrefixListAssociations"
}

export enum GetGetManagedPrefixListAssociationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetGetManagedPrefixListAssociationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetManagedPrefixListAssociationsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PrefixListId" })
  prefixListId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetManagedPrefixListAssociationsVersionEnum;
}


export class GetGetManagedPrefixListAssociationsHeaders extends SpeakeasyBase {
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


export class GetGetManagedPrefixListAssociationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetManagedPrefixListAssociationsQueryParams;

  @Metadata()
  headers: GetGetManagedPrefixListAssociationsHeaders;
}


export class GetGetManagedPrefixListAssociationsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGetManagedPrefixListAssociationsActionEnum {
    GetManagedPrefixListAssociations = "GetManagedPrefixListAssociations"
}

export enum GetGetManagedPrefixListAssociationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetGetManagedPrefixListAssociationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetManagedPrefixListAssociationsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PrefixListId" })
  prefixListId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetManagedPrefixListAssociationsVersionEnum;
}


export class GetGetManagedPrefixListAssociationsHeaders extends SpeakeasyBase {
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


export class GetGetManagedPrefixListAssociationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetManagedPrefixListAssociationsQueryParams;

  @SpeakeasyMetadata()
  headers: GetGetManagedPrefixListAssociationsHeaders;
}


export class GetGetManagedPrefixListAssociationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

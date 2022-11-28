import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRestoreManagedPrefixListVersionActionEnum {
    RestoreManagedPrefixListVersion = "RestoreManagedPrefixListVersion"
}

export enum GetRestoreManagedPrefixListVersionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetRestoreManagedPrefixListVersionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRestoreManagedPrefixListVersionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CurrentVersion" })
  currentVersion: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PrefixListId" })
  prefixListId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PreviousVersion" })
  previousVersion: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRestoreManagedPrefixListVersionVersionEnum;
}


export class GetRestoreManagedPrefixListVersionHeaders extends SpeakeasyBase {
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


export class GetRestoreManagedPrefixListVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRestoreManagedPrefixListVersionQueryParams;

  @SpeakeasyMetadata()
  headers: GetRestoreManagedPrefixListVersionHeaders;
}


export class GetRestoreManagedPrefixListVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

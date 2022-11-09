import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRestoreManagedPrefixListVersionActionEnum {
    RestoreManagedPrefixListVersion = "RestoreManagedPrefixListVersion"
}

export enum GetRestoreManagedPrefixListVersionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetRestoreManagedPrefixListVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRestoreManagedPrefixListVersionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CurrentVersion" })
  currentVersion: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PrefixListId" })
  prefixListId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PreviousVersion" })
  previousVersion: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRestoreManagedPrefixListVersionVersionEnum;
}


export class GetRestoreManagedPrefixListVersionHeaders extends SpeakeasyBase {
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


export class GetRestoreManagedPrefixListVersionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRestoreManagedPrefixListVersionQueryParams;

  @Metadata()
  headers: GetRestoreManagedPrefixListVersionHeaders;
}


export class GetRestoreManagedPrefixListVersionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

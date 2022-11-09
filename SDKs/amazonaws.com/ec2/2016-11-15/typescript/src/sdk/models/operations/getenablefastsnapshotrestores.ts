import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetEnableFastSnapshotRestoresActionEnum {
    EnableFastSnapshotRestores = "EnableFastSnapshotRestores"
}

export enum GetEnableFastSnapshotRestoresVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetEnableFastSnapshotRestoresQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetEnableFastSnapshotRestoresActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZone" })
  availabilityZone: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceSnapshotId" })
  sourceSnapshotId: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetEnableFastSnapshotRestoresVersionEnum;
}


export class GetEnableFastSnapshotRestoresHeaders extends SpeakeasyBase {
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


export class GetEnableFastSnapshotRestoresRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEnableFastSnapshotRestoresQueryParams;

  @Metadata()
  headers: GetEnableFastSnapshotRestoresHeaders;
}


export class GetEnableFastSnapshotRestoresResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

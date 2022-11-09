import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDisableFastSnapshotRestoresActionEnum {
    DisableFastSnapshotRestores = "DisableFastSnapshotRestores"
}

export enum GetDisableFastSnapshotRestoresVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDisableFastSnapshotRestoresQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDisableFastSnapshotRestoresActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZone" })
  availabilityZone: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceSnapshotId" })
  sourceSnapshotId: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDisableFastSnapshotRestoresVersionEnum;
}


export class GetDisableFastSnapshotRestoresHeaders extends SpeakeasyBase {
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


export class GetDisableFastSnapshotRestoresRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDisableFastSnapshotRestoresQueryParams;

  @Metadata()
  headers: GetDisableFastSnapshotRestoresHeaders;
}


export class GetDisableFastSnapshotRestoresResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

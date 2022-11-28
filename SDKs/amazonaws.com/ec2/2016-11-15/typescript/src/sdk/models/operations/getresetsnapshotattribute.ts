import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetResetSnapshotAttributeActionEnum {
    ResetSnapshotAttribute = "ResetSnapshotAttribute"
}

export enum GetResetSnapshotAttributeAttributeEnum {
    ProductCodes = "productCodes",
    CreateVolumePermission = "createVolumePermission"
}

export enum GetResetSnapshotAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetResetSnapshotAttributeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetResetSnapshotAttributeActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Attribute" })
  attribute: GetResetSnapshotAttributeAttributeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SnapshotId" })
  snapshotId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetResetSnapshotAttributeVersionEnum;
}


export class GetResetSnapshotAttributeHeaders extends SpeakeasyBase {
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


export class GetResetSnapshotAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetResetSnapshotAttributeQueryParams;

  @SpeakeasyMetadata()
  headers: GetResetSnapshotAttributeHeaders;
}


export class GetResetSnapshotAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyAvailabilityZoneGroupActionEnum {
    ModifyAvailabilityZoneGroup = "ModifyAvailabilityZoneGroup"
}

export enum GetModifyAvailabilityZoneGroupOptInStatusEnum {
    OptedIn = "opted-in",
    NotOptedIn = "not-opted-in"
}

export enum GetModifyAvailabilityZoneGroupVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyAvailabilityZoneGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyAvailabilityZoneGroupActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GroupName" })
  groupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OptInStatus" })
  optInStatus: GetModifyAvailabilityZoneGroupOptInStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyAvailabilityZoneGroupVersionEnum;
}


export class GetModifyAvailabilityZoneGroupHeaders extends SpeakeasyBase {
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


export class GetModifyAvailabilityZoneGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyAvailabilityZoneGroupQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyAvailabilityZoneGroupHeaders;
}


export class GetModifyAvailabilityZoneGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

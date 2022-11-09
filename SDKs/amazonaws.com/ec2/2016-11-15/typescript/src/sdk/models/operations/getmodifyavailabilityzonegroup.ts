import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyAvailabilityZoneGroupActionEnum {
    ModifyAvailabilityZoneGroup = "ModifyAvailabilityZoneGroup"
}

export enum GetModifyAvailabilityZoneGroupOptInStatusEnum {
    OptedIn = "opted-in"
,    NotOptedIn = "not-opted-in"
}

export enum GetModifyAvailabilityZoneGroupVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyAvailabilityZoneGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyAvailabilityZoneGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GroupName" })
  groupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OptInStatus" })
  optInStatus: GetModifyAvailabilityZoneGroupOptInStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyAvailabilityZoneGroupVersionEnum;
}


export class GetModifyAvailabilityZoneGroupHeaders extends SpeakeasyBase {
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


export class GetModifyAvailabilityZoneGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyAvailabilityZoneGroupQueryParams;

  @Metadata()
  headers: GetModifyAvailabilityZoneGroupHeaders;
}


export class GetModifyAvailabilityZoneGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

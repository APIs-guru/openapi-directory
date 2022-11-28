import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCreateNetworkInterfacePermissionActionEnum {
    CreateNetworkInterfacePermission = "CreateNetworkInterfacePermission"
}

export enum GetCreateNetworkInterfacePermissionPermissionEnum {
    InstanceAttach = "INSTANCE-ATTACH",
    EipAssociate = "EIP-ASSOCIATE"
}

export enum GetCreateNetworkInterfacePermissionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetCreateNetworkInterfacePermissionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateNetworkInterfacePermissionActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AwsAccountId" })
  awsAccountId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AwsService" })
  awsService?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" })
  networkInterfaceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Permission" })
  permission: GetCreateNetworkInterfacePermissionPermissionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateNetworkInterfacePermissionVersionEnum;
}


export class GetCreateNetworkInterfacePermissionHeaders extends SpeakeasyBase {
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


export class GetCreateNetworkInterfacePermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreateNetworkInterfacePermissionQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreateNetworkInterfacePermissionHeaders;
}


export class GetCreateNetworkInterfacePermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

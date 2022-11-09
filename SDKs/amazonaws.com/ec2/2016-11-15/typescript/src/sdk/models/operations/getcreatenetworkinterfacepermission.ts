import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateNetworkInterfacePermissionActionEnum {
    CreateNetworkInterfacePermission = "CreateNetworkInterfacePermission"
}

export enum GetCreateNetworkInterfacePermissionPermissionEnum {
    InstanceAttach = "INSTANCE-ATTACH"
,    EipAssociate = "EIP-ASSOCIATE"
}

export enum GetCreateNetworkInterfacePermissionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetCreateNetworkInterfacePermissionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateNetworkInterfacePermissionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AwsAccountId" })
  awsAccountId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AwsService" })
  awsService?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfaceId" })
  networkInterfaceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Permission" })
  permission: GetCreateNetworkInterfacePermissionPermissionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateNetworkInterfacePermissionVersionEnum;
}


export class GetCreateNetworkInterfacePermissionHeaders extends SpeakeasyBase {
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


export class GetCreateNetworkInterfacePermissionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateNetworkInterfacePermissionQueryParams;

  @Metadata()
  headers: GetCreateNetworkInterfacePermissionHeaders;
}


export class GetCreateNetworkInterfacePermissionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

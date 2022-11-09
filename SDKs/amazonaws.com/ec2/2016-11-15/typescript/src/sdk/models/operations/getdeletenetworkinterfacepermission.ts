import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteNetworkInterfacePermissionActionEnum {
    DeleteNetworkInterfacePermission = "DeleteNetworkInterfacePermission"
}

export enum GetDeleteNetworkInterfacePermissionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteNetworkInterfacePermissionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteNetworkInterfacePermissionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Force" })
  force?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NetworkInterfacePermissionId" })
  networkInterfacePermissionId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteNetworkInterfacePermissionVersionEnum;
}


export class GetDeleteNetworkInterfacePermissionHeaders extends SpeakeasyBase {
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


export class GetDeleteNetworkInterfacePermissionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteNetworkInterfacePermissionQueryParams;

  @Metadata()
  headers: GetDeleteNetworkInterfacePermissionHeaders;
}


export class GetDeleteNetworkInterfacePermissionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

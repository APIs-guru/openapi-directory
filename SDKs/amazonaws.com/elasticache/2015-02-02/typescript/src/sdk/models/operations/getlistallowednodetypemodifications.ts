import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListAllowedNodeTypeModificationsActionEnum {
    ListAllowedNodeTypeModifications = "ListAllowedNodeTypeModifications"
}

export enum GetListAllowedNodeTypeModificationsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetListAllowedNodeTypeModificationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListAllowedNodeTypeModificationsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CacheClusterId" })
  cacheClusterId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupId" })
  replicationGroupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListAllowedNodeTypeModificationsVersionEnum;
}


export class GetListAllowedNodeTypeModificationsHeaders extends SpeakeasyBase {
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


export class GetListAllowedNodeTypeModificationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListAllowedNodeTypeModificationsQueryParams;

  @Metadata()
  headers: GetListAllowedNodeTypeModificationsHeaders;
}


export class GetListAllowedNodeTypeModificationsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

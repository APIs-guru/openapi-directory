import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetListAllowedNodeTypeModificationsActionEnum {
    ListAllowedNodeTypeModifications = "ListAllowedNodeTypeModifications"
}

export enum GetListAllowedNodeTypeModificationsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}


export class GetListAllowedNodeTypeModificationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListAllowedNodeTypeModificationsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CacheClusterId" })
  cacheClusterId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReplicationGroupId" })
  replicationGroupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListAllowedNodeTypeModificationsVersionEnum;
}


export class GetListAllowedNodeTypeModificationsHeaders extends SpeakeasyBase {
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


export class GetListAllowedNodeTypeModificationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetListAllowedNodeTypeModificationsQueryParams;

  @SpeakeasyMetadata()
  headers: GetListAllowedNodeTypeModificationsHeaders;
}


export class GetListAllowedNodeTypeModificationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

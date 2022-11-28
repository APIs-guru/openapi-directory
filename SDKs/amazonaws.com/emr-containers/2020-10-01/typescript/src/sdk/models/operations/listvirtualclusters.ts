import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListVirtualClustersContainerProviderTypeEnum {
    Eks = "EKS"
}


export class ListVirtualClustersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=containerProviderId" })
  containerProviderId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=containerProviderType" })
  containerProviderType?: ListVirtualClustersContainerProviderTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAfter" })
  createdAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdBefore" })
  createdBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=states" })
  states?: shared.VirtualClusterStateEnum[];
}


export class ListVirtualClustersHeaders extends SpeakeasyBase {
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


export class ListVirtualClustersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListVirtualClustersQueryParams;

  @SpeakeasyMetadata()
  headers: ListVirtualClustersHeaders;
}


export class ListVirtualClustersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  listVirtualClustersResponse?: shared.ListVirtualClustersResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}

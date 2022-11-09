import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListVirtualClustersContainerProviderTypeEnum {
    Eks = "EKS"
}


export class ListVirtualClustersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=containerProviderId" })
  containerProviderId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=containerProviderType" })
  containerProviderType?: ListVirtualClustersContainerProviderTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdAfter" })
  createdAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdBefore" })
  createdBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=states" })
  states?: shared.VirtualClusterStateEnum[];
}


export class ListVirtualClustersHeaders extends SpeakeasyBase {
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


export class ListVirtualClustersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListVirtualClustersQueryParams;

  @Metadata()
  headers: ListVirtualClustersHeaders;
}


export class ListVirtualClustersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listVirtualClustersResponse?: shared.ListVirtualClustersResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}

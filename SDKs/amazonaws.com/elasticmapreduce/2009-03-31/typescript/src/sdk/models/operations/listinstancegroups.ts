import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListInstanceGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;
}

export enum ListInstanceGroupsXAmzTargetEnum {
    ElasticMapReduceListInstanceGroups = "ElasticMapReduce.ListInstanceGroups"
}


export class ListInstanceGroupsHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListInstanceGroupsXAmzTargetEnum;
}


export class ListInstanceGroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListInstanceGroupsQueryParams;

  @Metadata()
  headers: ListInstanceGroupsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListInstanceGroupsInput;
}


export class ListInstanceGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listInstanceGroupsOutput?: shared.ListInstanceGroupsOutput;

  @Metadata()
  statusCode: number;
}

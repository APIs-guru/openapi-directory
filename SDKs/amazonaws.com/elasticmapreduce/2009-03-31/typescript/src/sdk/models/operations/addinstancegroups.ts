import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AddInstanceGroupsXAmzTargetEnum {
    ElasticMapReduceAddInstanceGroups = "ElasticMapReduce.AddInstanceGroups"
}


export class AddInstanceGroupsHeaders extends SpeakeasyBase {
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
  xAmzTarget: AddInstanceGroupsXAmzTargetEnum;
}


export class AddInstanceGroupsRequest extends SpeakeasyBase {
  @Metadata()
  headers: AddInstanceGroupsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AddInstanceGroupsInput;
}


export class AddInstanceGroupsResponse extends SpeakeasyBase {
  @Metadata()
  addInstanceGroupsOutput?: shared.AddInstanceGroupsOutput;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}

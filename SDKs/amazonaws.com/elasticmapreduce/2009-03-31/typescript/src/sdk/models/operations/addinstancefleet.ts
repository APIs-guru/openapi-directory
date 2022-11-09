import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AddInstanceFleetXAmzTargetEnum {
    ElasticMapReduceAddInstanceFleet = "ElasticMapReduce.AddInstanceFleet"
}


export class AddInstanceFleetHeaders extends SpeakeasyBase {
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
  xAmzTarget: AddInstanceFleetXAmzTargetEnum;
}


export class AddInstanceFleetRequest extends SpeakeasyBase {
  @Metadata()
  headers: AddInstanceFleetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AddInstanceFleetInput;
}


export class AddInstanceFleetResponse extends SpeakeasyBase {
  @Metadata()
  addInstanceFleetOutput?: shared.AddInstanceFleetOutput;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;
}

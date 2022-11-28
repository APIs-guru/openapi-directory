import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AddInstanceFleetXAmzTargetEnum {
    ElasticMapReduceAddInstanceFleet = "ElasticMapReduce.AddInstanceFleet"
}


export class AddInstanceFleetHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: AddInstanceFleetXAmzTargetEnum;
}


export class AddInstanceFleetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AddInstanceFleetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AddInstanceFleetInput;
}


export class AddInstanceFleetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addInstanceFleetOutput?: shared.AddInstanceFleetOutput;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

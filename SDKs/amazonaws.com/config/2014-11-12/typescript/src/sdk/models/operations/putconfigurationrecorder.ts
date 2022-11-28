import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutConfigurationRecorderXAmzTargetEnum {
    StarlingDoveServicePutConfigurationRecorder = "StarlingDoveService.PutConfigurationRecorder"
}


export class PutConfigurationRecorderHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutConfigurationRecorderXAmzTargetEnum;
}


export class PutConfigurationRecorderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutConfigurationRecorderHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutConfigurationRecorderRequest;
}


export class PutConfigurationRecorderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidConfigurationRecorderNameException?: any;

  @SpeakeasyMetadata()
  invalidRecordingGroupException?: any;

  @SpeakeasyMetadata()
  invalidRoleException?: any;

  @SpeakeasyMetadata()
  maxNumberOfConfigurationRecordersExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartJobRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=virtualClusterId" })
  virtualClusterId: string;
}


export class StartJobRunHeaders extends SpeakeasyBase {
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


// StartJobRunRequestBodyConfigurationOverrides
/** 
 * A configuration specification to be used to override existing configurations.
**/
export class StartJobRunRequestBodyConfigurationOverrides extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationConfiguration", elemType: shared.Configuration })
  applicationConfiguration?: shared.Configuration[];

  @SpeakeasyMetadata({ data: "json, name=monitoringConfiguration" })
  monitoringConfiguration?: shared.MonitoringConfiguration;
}


// StartJobRunRequestBodyJobDriver
/** 
 * Specify the driver that the job runs on.
**/
export class StartJobRunRequestBodyJobDriver extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sparkSubmitJobDriver" })
  sparkSubmitJobDriver?: shared.SparkSubmitJobDriver;
}


export class StartJobRunRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=configurationOverrides" })
  configurationOverrides?: StartJobRunRequestBodyConfigurationOverrides;

  @SpeakeasyMetadata({ data: "json, name=executionRoleArn" })
  executionRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=jobDriver" })
  jobDriver: StartJobRunRequestBodyJobDriver;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=releaseLabel" })
  releaseLabel: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class StartJobRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StartJobRunPathParams;

  @SpeakeasyMetadata()
  headers: StartJobRunHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: StartJobRunRequestBody;
}


export class StartJobRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  startJobRunResponse?: shared.StartJobRunResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}

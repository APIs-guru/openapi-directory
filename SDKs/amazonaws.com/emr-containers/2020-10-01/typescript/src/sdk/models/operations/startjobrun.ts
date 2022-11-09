import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartJobRunPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=virtualClusterId" })
  virtualClusterId: string;
}


export class StartJobRunHeaders extends SpeakeasyBase {
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


// StartJobRunRequestBodyConfigurationOverrides
/** 
 * A configuration specification to be used to override existing configurations.
**/
export class StartJobRunRequestBodyConfigurationOverrides extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationConfiguration", elemType: shared.Configuration })
  applicationConfiguration?: shared.Configuration[];

  @Metadata({ data: "json, name=monitoringConfiguration" })
  monitoringConfiguration?: shared.MonitoringConfiguration;
}


// StartJobRunRequestBodyJobDriver
/** 
 * Specify the driver that the job runs on.
**/
export class StartJobRunRequestBodyJobDriver extends SpeakeasyBase {
  @Metadata({ data: "json, name=sparkSubmitJobDriver" })
  sparkSubmitJobDriver?: shared.SparkSubmitJobDriver;
}


export class StartJobRunRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=configurationOverrides" })
  configurationOverrides?: StartJobRunRequestBodyConfigurationOverrides;

  @Metadata({ data: "json, name=executionRoleArn" })
  executionRoleArn: string;

  @Metadata({ data: "json, name=jobDriver" })
  jobDriver: StartJobRunRequestBodyJobDriver;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=releaseLabel" })
  releaseLabel: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class StartJobRunRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StartJobRunPathParams;

  @Metadata()
  headers: StartJobRunHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartJobRunRequestBody;
}


export class StartJobRunResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  startJobRunResponse?: shared.StartJobRunResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}

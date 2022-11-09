import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDatasetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=datasetName" })
  datasetName: string;
}


export class UpdateDatasetHeaders extends SpeakeasyBase {
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


// UpdateDatasetRequestBodyRetentionPeriod
/** 
 * How long, in days, message data is kept.
**/
export class UpdateDatasetRequestBodyRetentionPeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=numberOfDays" })
  numberOfDays?: number;

  @Metadata({ data: "json, name=unlimited" })
  unlimited?: boolean;
}


// UpdateDatasetRequestBodyVersioningConfiguration
/** 
 * Information about the versioning of dataset contents.
**/
export class UpdateDatasetRequestBodyVersioningConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxVersions" })
  maxVersions?: number;

  @Metadata({ data: "json, name=unlimited" })
  unlimited?: boolean;
}


export class UpdateDatasetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.DatasetAction })
  actions: shared.DatasetAction[];

  @Metadata({ data: "json, name=contentDeliveryRules", elemType: shared.DatasetContentDeliveryRule })
  contentDeliveryRules?: shared.DatasetContentDeliveryRule[];

  @Metadata({ data: "json, name=lateDataRules", elemType: shared.LateDataRule })
  lateDataRules?: shared.LateDataRule[];

  @Metadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: UpdateDatasetRequestBodyRetentionPeriod;

  @Metadata({ data: "json, name=triggers", elemType: shared.DatasetTrigger })
  triggers?: shared.DatasetTrigger[];

  @Metadata({ data: "json, name=versioningConfiguration" })
  versioningConfiguration?: UpdateDatasetRequestBodyVersioningConfiguration;
}


export class UpdateDatasetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDatasetPathParams;

  @Metadata()
  headers: UpdateDatasetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateDatasetRequestBody;
}


export class UpdateDatasetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}

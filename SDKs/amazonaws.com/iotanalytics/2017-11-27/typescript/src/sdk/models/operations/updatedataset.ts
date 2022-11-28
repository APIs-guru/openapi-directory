import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDatasetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetName" })
  datasetName: string;
}


export class UpdateDatasetHeaders extends SpeakeasyBase {
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


// UpdateDatasetRequestBodyRetentionPeriod
/** 
 * How long, in days, message data is kept.
**/
export class UpdateDatasetRequestBodyRetentionPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numberOfDays" })
  numberOfDays?: number;

  @SpeakeasyMetadata({ data: "json, name=unlimited" })
  unlimited?: boolean;
}


// UpdateDatasetRequestBodyVersioningConfiguration
/** 
 * Information about the versioning of dataset contents.
**/
export class UpdateDatasetRequestBodyVersioningConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxVersions" })
  maxVersions?: number;

  @SpeakeasyMetadata({ data: "json, name=unlimited" })
  unlimited?: boolean;
}


export class UpdateDatasetRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: shared.DatasetAction })
  actions: shared.DatasetAction[];

  @SpeakeasyMetadata({ data: "json, name=contentDeliveryRules", elemType: shared.DatasetContentDeliveryRule })
  contentDeliveryRules?: shared.DatasetContentDeliveryRule[];

  @SpeakeasyMetadata({ data: "json, name=lateDataRules", elemType: shared.LateDataRule })
  lateDataRules?: shared.LateDataRule[];

  @SpeakeasyMetadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: UpdateDatasetRequestBodyRetentionPeriod;

  @SpeakeasyMetadata({ data: "json, name=triggers", elemType: shared.DatasetTrigger })
  triggers?: shared.DatasetTrigger[];

  @SpeakeasyMetadata({ data: "json, name=versioningConfiguration" })
  versioningConfiguration?: UpdateDatasetRequestBodyVersioningConfiguration;
}


export class UpdateDatasetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDatasetPathParams;

  @SpeakeasyMetadata()
  headers: UpdateDatasetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateDatasetRequestBody;
}


export class UpdateDatasetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}

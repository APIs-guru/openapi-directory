import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDatasetHeaders extends SpeakeasyBase {
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


// CreateDatasetRequestBodyRetentionPeriod
/** 
 * How long, in days, message data is kept.
**/
export class CreateDatasetRequestBodyRetentionPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numberOfDays" })
  numberOfDays?: number;

  @SpeakeasyMetadata({ data: "json, name=unlimited" })
  unlimited?: boolean;
}


// CreateDatasetRequestBodyVersioningConfiguration
/** 
 * Information about the versioning of dataset contents.
**/
export class CreateDatasetRequestBodyVersioningConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxVersions" })
  maxVersions?: number;

  @SpeakeasyMetadata({ data: "json, name=unlimited" })
  unlimited?: boolean;
}


export class CreateDatasetRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: shared.DatasetAction })
  actions: shared.DatasetAction[];

  @SpeakeasyMetadata({ data: "json, name=contentDeliveryRules", elemType: shared.DatasetContentDeliveryRule })
  contentDeliveryRules?: shared.DatasetContentDeliveryRule[];

  @SpeakeasyMetadata({ data: "json, name=datasetName" })
  datasetName: string;

  @SpeakeasyMetadata({ data: "json, name=lateDataRules", elemType: shared.LateDataRule })
  lateDataRules?: shared.LateDataRule[];

  @SpeakeasyMetadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: CreateDatasetRequestBodyRetentionPeriod;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @SpeakeasyMetadata({ data: "json, name=triggers", elemType: shared.DatasetTrigger })
  triggers?: shared.DatasetTrigger[];

  @SpeakeasyMetadata({ data: "json, name=versioningConfiguration" })
  versioningConfiguration?: CreateDatasetRequestBodyVersioningConfiguration;
}


export class CreateDatasetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateDatasetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateDatasetRequestBody;
}


export class CreateDatasetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createDatasetResponse?: shared.CreateDatasetResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}

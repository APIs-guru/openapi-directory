import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDatasetHeaders extends SpeakeasyBase {
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


// CreateDatasetRequestBodyRetentionPeriod
/** 
 * How long, in days, message data is kept.
**/
export class CreateDatasetRequestBodyRetentionPeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=numberOfDays" })
  numberOfDays?: number;

  @Metadata({ data: "json, name=unlimited" })
  unlimited?: boolean;
}


// CreateDatasetRequestBodyVersioningConfiguration
/** 
 * Information about the versioning of dataset contents.
**/
export class CreateDatasetRequestBodyVersioningConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxVersions" })
  maxVersions?: number;

  @Metadata({ data: "json, name=unlimited" })
  unlimited?: boolean;
}


export class CreateDatasetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.DatasetAction })
  actions: shared.DatasetAction[];

  @Metadata({ data: "json, name=contentDeliveryRules", elemType: shared.DatasetContentDeliveryRule })
  contentDeliveryRules?: shared.DatasetContentDeliveryRule[];

  @Metadata({ data: "json, name=datasetName" })
  datasetName: string;

  @Metadata({ data: "json, name=lateDataRules", elemType: shared.LateDataRule })
  lateDataRules?: shared.LateDataRule[];

  @Metadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: CreateDatasetRequestBodyRetentionPeriod;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @Metadata({ data: "json, name=triggers", elemType: shared.DatasetTrigger })
  triggers?: shared.DatasetTrigger[];

  @Metadata({ data: "json, name=versioningConfiguration" })
  versioningConfiguration?: CreateDatasetRequestBodyVersioningConfiguration;
}


export class CreateDatasetRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDatasetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDatasetRequestBody;
}


export class CreateDatasetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createDatasetResponse?: shared.CreateDatasetResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}

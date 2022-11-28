import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListMitigationActionsActionTypeEnum {
    UpdateDeviceCertificate = "UPDATE_DEVICE_CERTIFICATE",
    UpdateCaCertificate = "UPDATE_CA_CERTIFICATE",
    AddThingsToThingGroup = "ADD_THINGS_TO_THING_GROUP",
    ReplaceDefaultPolicyVersion = "REPLACE_DEFAULT_POLICY_VERSION",
    EnableIotLogging = "ENABLE_IOT_LOGGING",
    PublishFindingToSns = "PUBLISH_FINDING_TO_SNS"
}


export class ListMitigationActionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=actionType" })
  actionType?: ListMitigationActionsActionTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListMitigationActionsHeaders extends SpeakeasyBase {
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


export class ListMitigationActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListMitigationActionsQueryParams;

  @SpeakeasyMetadata()
  headers: ListMitigationActionsHeaders;
}


export class ListMitigationActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  listMitigationActionsResponse?: shared.ListMitigationActionsResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}

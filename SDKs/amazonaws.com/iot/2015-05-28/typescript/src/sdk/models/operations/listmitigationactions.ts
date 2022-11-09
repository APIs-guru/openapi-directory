import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListMitigationActionsActionTypeEnum {
    UpdateDeviceCertificate = "UPDATE_DEVICE_CERTIFICATE"
,    UpdateCaCertificate = "UPDATE_CA_CERTIFICATE"
,    AddThingsToThingGroup = "ADD_THINGS_TO_THING_GROUP"
,    ReplaceDefaultPolicyVersion = "REPLACE_DEFAULT_POLICY_VERSION"
,    EnableIotLogging = "ENABLE_IOT_LOGGING"
,    PublishFindingToSns = "PUBLISH_FINDING_TO_SNS"
}


export class ListMitigationActionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=actionType" })
  actionType?: ListMitigationActionsActionTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}


export class ListMitigationActionsHeaders extends SpeakeasyBase {
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


export class ListMitigationActionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListMitigationActionsQueryParams;

  @Metadata()
  headers: ListMitigationActionsHeaders;
}


export class ListMitigationActionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listMitigationActionsResponse?: shared.ListMitigationActionsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}

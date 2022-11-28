import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateThingGroupsForThingHeaders extends SpeakeasyBase {
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


export class UpdateThingGroupsForThingRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=overrideDynamicGroups" })
  overrideDynamicGroups?: boolean;

  @SpeakeasyMetadata({ data: "json, name=thingGroupsToAdd" })
  thingGroupsToAdd?: string[];

  @SpeakeasyMetadata({ data: "json, name=thingGroupsToRemove" })
  thingGroupsToRemove?: string[];

  @SpeakeasyMetadata({ data: "json, name=thingName" })
  thingName?: string;
}


export class UpdateThingGroupsForThingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateThingGroupsForThingHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateThingGroupsForThingRequestBody;
}


export class UpdateThingGroupsForThingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateThingGroupsForThingResponse?: Map<string, any>;
}

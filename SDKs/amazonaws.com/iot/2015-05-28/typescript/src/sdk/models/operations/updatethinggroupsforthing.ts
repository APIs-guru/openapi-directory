import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateThingGroupsForThingHeaders extends SpeakeasyBase {
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


export class UpdateThingGroupsForThingRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=overrideDynamicGroups" })
  overrideDynamicGroups?: boolean;

  @Metadata({ data: "json, name=thingGroupsToAdd" })
  thingGroupsToAdd?: string[];

  @Metadata({ data: "json, name=thingGroupsToRemove" })
  thingGroupsToRemove?: string[];

  @Metadata({ data: "json, name=thingName" })
  thingName?: string;
}


export class UpdateThingGroupsForThingRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateThingGroupsForThingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateThingGroupsForThingRequestBody;
}


export class UpdateThingGroupsForThingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateThingGroupsForThingResponse?: Map<string, any>;
}

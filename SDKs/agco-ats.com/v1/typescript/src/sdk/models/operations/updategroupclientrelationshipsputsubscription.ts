import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGroupClientRelationshipsPutSubscriptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=RelationshipID" })
  relationshipId: string;
}


export class UpdateGroupClientRelationshipsPutSubscriptionRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  updateSystemModelsUpdateGroupClientRelationship?: shared.UpdateSystemModelsUpdateGroupClientRelationship;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  updateSystemModelsUpdateGroupClientRelationship1?: shared.UpdateSystemModelsUpdateGroupClientRelationship;

  @Metadata({ data: "request, media_type=text/json" })
  updateSystemModelsUpdateGroupClientRelationship2?: shared.UpdateSystemModelsUpdateGroupClientRelationship;
}


export class UpdateGroupClientRelationshipsPutSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGroupClientRelationshipsPutSubscriptionPathParams;

  @Metadata()
  request: UpdateGroupClientRelationshipsPutSubscriptionRequests;
}


export class UpdateGroupClientRelationshipsPutSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

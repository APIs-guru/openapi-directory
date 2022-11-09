import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGroupClientRelationshipsGetSubscriptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=RelationshipID" })
  relationshipId: string;
}


export class UpdateGroupClientRelationshipsGetSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGroupClientRelationshipsGetSubscriptionPathParams;
}


export class UpdateGroupClientRelationshipsGetSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  apiModelsApiError?: shared.ApiModelsApiError;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSystemModelsUpdateGroupClientRelationship?: shared.UpdateSystemModelsUpdateGroupClientRelationship;
}

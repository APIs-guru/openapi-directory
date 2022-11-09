import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Active" })
  active: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClientID" })
  clientId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UpdateGroupID" })
  updateGroupId: string;
}


export class UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdQueryParams;
}


export class UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

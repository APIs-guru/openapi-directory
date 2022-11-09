import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateTeamMemberResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;
}

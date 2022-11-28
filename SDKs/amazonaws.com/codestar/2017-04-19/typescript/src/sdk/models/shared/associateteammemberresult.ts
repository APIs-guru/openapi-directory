import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateTeamMemberResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;
}

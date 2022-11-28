import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceServerScopeType } from "./resourceserverscopetype";



export class CreateResourceServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identifier" })
  identifier: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Scopes", elemType: ResourceServerScopeType })
  scopes?: ResourceServerScopeType[];

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}

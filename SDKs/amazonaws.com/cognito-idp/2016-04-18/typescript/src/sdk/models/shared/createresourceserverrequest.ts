import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceServerScopeType } from "./resourceserverscopetype";


export class CreateResourceServerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identifier" })
  identifier: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Scopes", elemType: shared.ResourceServerScopeType })
  scopes?: ResourceServerScopeType[];

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;
}

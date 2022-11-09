import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TestInvokeAuthorizerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=disconnectAfterInSeconds" })
  disconnectAfterInSeconds?: number;

  @Metadata({ data: "json, name=isAuthenticated" })
  isAuthenticated?: boolean;

  @Metadata({ data: "json, name=policyDocuments" })
  policyDocuments?: string[];

  @Metadata({ data: "json, name=principalId" })
  principalId?: string;

  @Metadata({ data: "json, name=refreshAfterInSeconds" })
  refreshAfterInSeconds?: number;
}

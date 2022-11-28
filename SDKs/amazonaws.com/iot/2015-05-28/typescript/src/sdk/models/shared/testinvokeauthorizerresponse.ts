import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TestInvokeAuthorizerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disconnectAfterInSeconds" })
  disconnectAfterInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=isAuthenticated" })
  isAuthenticated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=policyDocuments" })
  policyDocuments?: string[];

  @SpeakeasyMetadata({ data: "json, name=principalId" })
  principalId?: string;

  @SpeakeasyMetadata({ data: "json, name=refreshAfterInSeconds" })
  refreshAfterInSeconds?: number;
}

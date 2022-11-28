import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListPoliciesGrantingServiceAccessEntry } from "./listpoliciesgrantingserviceaccessentry";



export class ListPoliciesGrantingServiceAccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ListPoliciesGrantingServiceAccessEntry })
  policiesGrantingServiceAccess: ListPoliciesGrantingServiceAccessEntry[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ListPoliciesGrantingServiceAccessEntry } from "./listpoliciesgrantingserviceaccessentry";
export declare class ListPoliciesGrantingServiceAccessResponse extends SpeakeasyBase {
    isTruncated?: boolean;
    marker?: string;
    policiesGrantingServiceAccess: ListPoliciesGrantingServiceAccessEntry[];
}

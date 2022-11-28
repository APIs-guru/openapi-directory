import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyGrantingServiceAccess } from "./policygrantingserviceaccess";
/**
 * <p>Contains details about the permissions policies that are attached to the specified identity (user, group, or role).</p> <p>This data type is used as a response element in the <a>ListPoliciesGrantingServiceAccess</a> operation.</p>
**/
export declare class ListPoliciesGrantingServiceAccessEntry extends SpeakeasyBase {
    policies?: PolicyGrantingServiceAccess[];
    serviceNamespace?: string;
}

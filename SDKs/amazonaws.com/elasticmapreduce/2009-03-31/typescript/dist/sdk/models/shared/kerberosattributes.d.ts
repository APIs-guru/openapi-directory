import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a> in the <i>Amazon EMR Management Guide</i>.
**/
export declare class KerberosAttributes extends SpeakeasyBase {
    adDomainJoinPassword?: string;
    adDomainJoinUser?: string;
    crossRealmTrustPrincipalPassword?: string;
    kdcAdminPassword: string;
    realm: string;
}

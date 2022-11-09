import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KerberosAttributes
/** 
 * Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a> in the <i>Amazon EMR Management Guide</i>.
**/
export class KerberosAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=ADDomainJoinPassword" })
  adDomainJoinPassword?: string;

  @Metadata({ data: "json, name=ADDomainJoinUser" })
  adDomainJoinUser?: string;

  @Metadata({ data: "json, name=CrossRealmTrustPrincipalPassword" })
  crossRealmTrustPrincipalPassword?: string;

  @Metadata({ data: "json, name=KdcAdminPassword" })
  kdcAdminPassword: string;

  @Metadata({ data: "json, name=Realm" })
  realm: string;
}

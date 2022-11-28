import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KerberosAttributes
/** 
 * Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a> in the <i>Amazon EMR Management Guide</i>.
**/
export class KerberosAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ADDomainJoinPassword" })
  adDomainJoinPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=ADDomainJoinUser" })
  adDomainJoinUser?: string;

  @SpeakeasyMetadata({ data: "json, name=CrossRealmTrustPrincipalPassword" })
  crossRealmTrustPrincipalPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=KdcAdminPassword" })
  kdcAdminPassword: string;

  @SpeakeasyMetadata({ data: "json, name=Realm" })
  realm: string;
}

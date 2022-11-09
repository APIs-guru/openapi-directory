import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SsoIdentity
/** 
 * Contains information about your identity source in AWS Single Sign-On. For more information, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">AWS Single Sign-On User Guide</a>.
**/
export class SsoIdentity extends SpeakeasyBase {
  @Metadata({ data: "json, name=identityStoreId" })
  identityStoreId: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SsoIdentity
/** 
 * Contains information about your identity source in AWS Single Sign-On. For more information, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">AWS Single Sign-On User Guide</a>.
**/
export class SsoIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identityStoreId" })
  identityStoreId: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}

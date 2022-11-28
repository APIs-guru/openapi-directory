import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SelectiveAuthEnum } from "./selectiveauthenum";
import { TrustDirectionEnum } from "./trustdirectionenum";
import { TrustTypeEnum } from "./trusttypeenum";



// CreateTrustRequest
/** 
 * <p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain.</p>
**/
export class CreateTrustRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConditionalForwarderIpAddrs" })
  conditionalForwarderIpAddrs?: string[];

  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @SpeakeasyMetadata({ data: "json, name=RemoteDomainName" })
  remoteDomainName: string;

  @SpeakeasyMetadata({ data: "json, name=SelectiveAuth" })
  selectiveAuth?: SelectiveAuthEnum;

  @SpeakeasyMetadata({ data: "json, name=TrustDirection" })
  trustDirection: TrustDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=TrustPassword" })
  trustPassword: string;

  @SpeakeasyMetadata({ data: "json, name=TrustType" })
  trustType?: TrustTypeEnum;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SelectiveAuthEnum } from "./selectiveauthenum";
import { TrustDirectionEnum } from "./trustdirectionenum";
import { TrustTypeEnum } from "./trusttypeenum";


// CreateTrustRequest
/** 
 * <p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain.</p>
**/
export class CreateTrustRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConditionalForwarderIpAddrs" })
  conditionalForwarderIpAddrs?: string[];

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId: string;

  @Metadata({ data: "json, name=RemoteDomainName" })
  remoteDomainName: string;

  @Metadata({ data: "json, name=SelectiveAuth" })
  selectiveAuth?: SelectiveAuthEnum;

  @Metadata({ data: "json, name=TrustDirection" })
  trustDirection: TrustDirectionEnum;

  @Metadata({ data: "json, name=TrustPassword" })
  trustPassword: string;

  @Metadata({ data: "json, name=TrustType" })
  trustType?: TrustTypeEnum;
}

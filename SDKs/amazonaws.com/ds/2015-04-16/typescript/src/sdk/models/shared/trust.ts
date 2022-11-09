import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SelectiveAuthEnum } from "./selectiveauthenum";
import { TrustDirectionEnum } from "./trustdirectionenum";
import { TrustStateEnum } from "./truststateenum";
import { TrustTypeEnum } from "./trusttypeenum";


// Trust
/** 
 * Describes a trust relationship between an Managed Microsoft AD directory and an external domain.
**/
export class Trust extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedDateTime" })
  createdDateTime?: Date;

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @Metadata({ data: "json, name=LastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=RemoteDomainName" })
  remoteDomainName?: string;

  @Metadata({ data: "json, name=SelectiveAuth" })
  selectiveAuth?: SelectiveAuthEnum;

  @Metadata({ data: "json, name=StateLastUpdatedDateTime" })
  stateLastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=TrustDirection" })
  trustDirection?: TrustDirectionEnum;

  @Metadata({ data: "json, name=TrustId" })
  trustId?: string;

  @Metadata({ data: "json, name=TrustState" })
  trustState?: TrustStateEnum;

  @Metadata({ data: "json, name=TrustStateReason" })
  trustStateReason?: string;

  @Metadata({ data: "json, name=TrustType" })
  trustType?: TrustTypeEnum;
}

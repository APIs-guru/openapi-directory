import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SelectiveAuthEnum } from "./selectiveauthenum";
import { TrustDirectionEnum } from "./trustdirectionenum";
import { TrustStateEnum } from "./truststateenum";
import { TrustTypeEnum } from "./trusttypeenum";



// Trust
/** 
 * Describes a trust relationship between an Managed Microsoft AD directory and an external domain.
**/
export class Trust extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedDateTime" })
  createdDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=RemoteDomainName" })
  remoteDomainName?: string;

  @SpeakeasyMetadata({ data: "json, name=SelectiveAuth" })
  selectiveAuth?: SelectiveAuthEnum;

  @SpeakeasyMetadata({ data: "json, name=StateLastUpdatedDateTime" })
  stateLastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TrustDirection" })
  trustDirection?: TrustDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=TrustId" })
  trustId?: string;

  @SpeakeasyMetadata({ data: "json, name=TrustState" })
  trustState?: TrustStateEnum;

  @SpeakeasyMetadata({ data: "json, name=TrustStateReason" })
  trustStateReason?: string;

  @SpeakeasyMetadata({ data: "json, name=TrustType" })
  trustType?: TrustTypeEnum;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackStateEnum } from "./conformancepackstateenum";



// ConformancePackStatusDetail
/** 
 * Status details of a conformance pack.
**/
export class ConformancePackStatusDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConformancePackArn" })
  conformancePackArn: string;

  @SpeakeasyMetadata({ data: "json, name=ConformancePackId" })
  conformancePackId: string;

  @SpeakeasyMetadata({ data: "json, name=ConformancePackName" })
  conformancePackName: string;

  @SpeakeasyMetadata({ data: "json, name=ConformancePackState" })
  conformancePackState: ConformancePackStateEnum;

  @SpeakeasyMetadata({ data: "json, name=ConformancePackStatusReason" })
  conformancePackStatusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateCompletedTime" })
  lastUpdateCompletedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateRequestedTime" })
  lastUpdateRequestedTime: Date;

  @SpeakeasyMetadata({ data: "json, name=StackArn" })
  stackArn: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConformancePackStateEnum } from "./conformancepackstateenum";


// ConformancePackStatusDetail
/** 
 * Status details of a conformance pack.
**/
export class ConformancePackStatusDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConformancePackArn" })
  conformancePackArn: string;

  @Metadata({ data: "json, name=ConformancePackId" })
  conformancePackId: string;

  @Metadata({ data: "json, name=ConformancePackName" })
  conformancePackName: string;

  @Metadata({ data: "json, name=ConformancePackState" })
  conformancePackState: ConformancePackStateEnum;

  @Metadata({ data: "json, name=ConformancePackStatusReason" })
  conformancePackStatusReason?: string;

  @Metadata({ data: "json, name=LastUpdateCompletedTime" })
  lastUpdateCompletedTime?: Date;

  @Metadata({ data: "json, name=LastUpdateRequestedTime" })
  lastUpdateRequestedTime: Date;

  @Metadata({ data: "json, name=StackArn" })
  stackArn: string;
}

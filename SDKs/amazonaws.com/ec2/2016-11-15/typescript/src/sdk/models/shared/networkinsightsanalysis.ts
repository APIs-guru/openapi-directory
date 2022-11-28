import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlternatePathHint } from "./alternatepathhint";
import { Explanation } from "./explanation";
import { PathComponent } from "./pathcomponent";
import { AnalysisStatusEnum } from "./analysisstatusenum";
import { Tag } from "./tag";



// NetworkInsightsAnalysis
/** 
 * Describes a network insights analysis.
**/
export class NetworkInsightsAnalysis extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AlternatePathHint })
  alternatePathHints?: AlternatePathHint[];

  @SpeakeasyMetadata({ elemType: Explanation })
  explanations?: Explanation[];

  @SpeakeasyMetadata()
  filterInArns?: string[];

  @SpeakeasyMetadata({ elemType: PathComponent })
  forwardPathComponents?: PathComponent[];

  @SpeakeasyMetadata()
  networkInsightsAnalysisArn?: string;

  @SpeakeasyMetadata()
  networkInsightsAnalysisId?: string;

  @SpeakeasyMetadata()
  networkInsightsPathId?: string;

  @SpeakeasyMetadata()
  networkPathFound?: boolean;

  @SpeakeasyMetadata({ elemType: PathComponent })
  returnPathComponents?: PathComponent[];

  @SpeakeasyMetadata()
  startDate?: Date;

  @SpeakeasyMetadata()
  status?: AnalysisStatusEnum;

  @SpeakeasyMetadata()
  statusMessage?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}

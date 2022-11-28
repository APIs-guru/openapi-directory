import { SpeakeasyBase } from "../../../internal/utils";
import { AlternatePathHint } from "./alternatepathhint";
import { Explanation } from "./explanation";
import { PathComponent } from "./pathcomponent";
import { AnalysisStatusEnum } from "./analysisstatusenum";
import { Tag } from "./tag";
/**
 * Describes a network insights analysis.
**/
export declare class NetworkInsightsAnalysis extends SpeakeasyBase {
    alternatePathHints?: AlternatePathHint[];
    explanations?: Explanation[];
    filterInArns?: string[];
    forwardPathComponents?: PathComponent[];
    networkInsightsAnalysisArn?: string;
    networkInsightsAnalysisId?: string;
    networkInsightsPathId?: string;
    networkPathFound?: boolean;
    returnPathComponents?: PathComponent[];
    startDate?: Date;
    status?: AnalysisStatusEnum;
    statusMessage?: string;
    tags?: Tag[];
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A named expression that can be evaluated at search time and used for ranking or thresholding in a search query.
**/
export declare class NamedRankExpression extends SpeakeasyBase {
    rankExpression: string;
    rankName: string;
}

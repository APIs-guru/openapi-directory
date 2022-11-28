import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Describes an error experienced when getting recommendations.</p> <p>For example, an error is returned if you request recommendations for an unsupported Auto Scaling group, or if you request recommendations for an instance of an unsupported instance family.</p>
**/
export declare class GetRecommendationError extends SpeakeasyBase {
    code?: string;
    identifier?: string;
    message?: string;
}

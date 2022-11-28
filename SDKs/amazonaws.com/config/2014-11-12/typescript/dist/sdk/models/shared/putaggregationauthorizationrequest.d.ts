import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class PutAggregationAuthorizationRequest extends SpeakeasyBase {
    authorizedAccountId: string;
    authorizedAwsRegion: string;
    tags?: Tag[];
}

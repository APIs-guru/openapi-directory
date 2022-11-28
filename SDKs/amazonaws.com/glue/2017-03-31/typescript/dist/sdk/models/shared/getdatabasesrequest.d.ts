import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceShareTypeEnum } from "./resourcesharetypeenum";
export declare class GetDatabasesRequest extends SpeakeasyBase {
    catalogId?: string;
    maxResults?: number;
    nextToken?: string;
    resourceShareType?: ResourceShareTypeEnum;
}

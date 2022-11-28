import { SpeakeasyBase } from "../../../internal/utils";
import { SseTypeEnum } from "./ssetypeenum";
/**
 * Represents the settings used to enable server-side encryption.
**/
export declare class SseSpecification extends SpeakeasyBase {
    enabled?: boolean;
    kmsMasterKeyId?: string;
    sseType?: SseTypeEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { LdapsStatusEnum } from "./ldapsstatusenum";
/**
 * Contains general information about the LDAPS settings.
**/
export declare class LdapsSettingInfo extends SpeakeasyBase {
    ldapsStatus?: LdapsStatusEnum;
    ldapsStatusReason?: string;
    lastUpdatedDateTime?: Date;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
**/
export declare class DomainJoinInfo extends SpeakeasyBase {
    directoryName?: string;
    organizationalUnitDistinguishedName?: string;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceAccountCredentials } from "./serviceaccountcredentials";
/**
 * Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
**/
export declare class DirectoryConfig extends SpeakeasyBase {
    createdTime?: Date;
    directoryName: string;
    organizationalUnitDistinguishedNames?: string[];
    serviceAccountCredentials?: ServiceAccountCredentials;
}

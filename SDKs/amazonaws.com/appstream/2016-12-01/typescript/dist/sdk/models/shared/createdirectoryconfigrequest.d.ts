import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceAccountCredentials } from "./serviceaccountcredentials";
export declare class CreateDirectoryConfigRequest extends SpeakeasyBase {
    directoryName: string;
    organizationalUnitDistinguishedNames: string[];
    serviceAccountCredentials?: ServiceAccountCredentials;
}

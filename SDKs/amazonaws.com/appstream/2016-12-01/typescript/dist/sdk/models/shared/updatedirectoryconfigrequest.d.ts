import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceAccountCredentials } from "./serviceaccountcredentials";
export declare class UpdateDirectoryConfigRequest extends SpeakeasyBase {
    directoryName: string;
    organizationalUnitDistinguishedNames?: string[];
    serviceAccountCredentials?: ServiceAccountCredentials;
}

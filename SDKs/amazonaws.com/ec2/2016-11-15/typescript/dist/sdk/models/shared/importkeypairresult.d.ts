import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class ImportKeyPairResult extends SpeakeasyBase {
    keyFingerprint?: string;
    keyName?: string;
    keyPairId?: string;
    tags?: Tag[];
}

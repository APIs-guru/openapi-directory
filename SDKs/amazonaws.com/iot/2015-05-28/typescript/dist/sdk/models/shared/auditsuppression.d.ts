import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
/**
 *  Filters out specific findings of a Device Defender audit.
**/
export declare class AuditSuppression extends SpeakeasyBase {
    checkName: string;
    description?: string;
    expirationDate?: Date;
    resourceIdentifier: ResourceIdentifier;
    suppressIndefinitely?: boolean;
}

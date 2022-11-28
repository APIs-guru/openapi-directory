import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Set of credentials required to remotely access a fleet instance. Access credentials are requested by calling <a>GetInstanceAccess</a> and returned in an <a>InstanceAccess</a> object.
**/
export declare class InstanceCredentials extends SpeakeasyBase {
    secret?: string;
    userName?: string;
}

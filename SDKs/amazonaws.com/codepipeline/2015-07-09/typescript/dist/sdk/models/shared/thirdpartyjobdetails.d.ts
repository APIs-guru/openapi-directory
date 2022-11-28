import { SpeakeasyBase } from "../../../internal/utils";
import { ThirdPartyJobData } from "./thirdpartyjobdata";
/**
 * The details of a job sent in response to a <code>GetThirdPartyJobDetails</code> request.
**/
export declare class ThirdPartyJobDetails extends SpeakeasyBase {
    data?: ThirdPartyJobData;
    id?: string;
    nonce?: string;
}

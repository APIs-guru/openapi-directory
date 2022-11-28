import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteFleetErrorCodeEnum } from "./deletefleeterrorcodeenum";
/**
 * Describes an EC2 Fleet error.
**/
export declare class DeleteFleetError extends SpeakeasyBase {
    code?: DeleteFleetErrorCodeEnum;
    message?: string;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageState } from "./imagestate";
/**
 *  Details of an Amazon EC2 AMI.
**/
export declare class Ami extends SpeakeasyBase {
    accountId?: string;
    description?: string;
    image?: string;
    name?: string;
    region?: string;
    state?: ImageState;
}

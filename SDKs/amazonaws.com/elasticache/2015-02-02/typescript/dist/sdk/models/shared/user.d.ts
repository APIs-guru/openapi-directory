import { SpeakeasyBase } from "../../../internal/utils";
import { Authentication } from "./authentication";
export declare class User extends SpeakeasyBase {
    arn?: string;
    accessString?: string;
    authentication?: Authentication;
    engine?: string;
    status?: string;
    userGroupIds?: string[];
    userId?: string;
    userName?: string;
}
